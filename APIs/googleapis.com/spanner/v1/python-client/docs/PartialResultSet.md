# PartialResultSet

Partial results from a streaming read or SQL query. Streaming reads and SQL queries better tolerate large result sets, large rows, and large values, but are a little trickier to consume.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunked_value** | **bool** | If true, then the final value in values is chunked, and must be combined with more values from subsequent &#x60;PartialResultSet&#x60;s to obtain a complete field value. | [optional] 
**metadata** | [**ResultSetMetadata**](ResultSetMetadata.md) |  | [optional] 
**resume_token** | **bytearray** | Streaming calls might be interrupted for a variety of reasons, such as TCP connection loss. If this occurs, the stream of results can be resumed by re-sending the original request and including &#x60;resume_token&#x60;. Note that executing any other transaction in the same session invalidates the token. | [optional] 
**stats** | [**ResultSetStats**](ResultSetStats.md) |  | [optional] 
**values** | **List[object]** | A streamed result set consists of a stream of values, which might be split into many &#x60;PartialResultSet&#x60; messages to accommodate large rows and/or large values. Every N complete values defines a row, where N is equal to the number of entries in metadata.row_type.fields. Most values are encoded based on type as described here. It is possible that the last value in values is \&quot;chunked\&quot;, meaning that the rest of the value is sent in subsequent &#x60;PartialResultSet&#x60;(s). This is denoted by the chunked_value field. Two or more chunked values can be merged to form a complete value as follows: * &#x60;bool/number/null&#x60;: cannot be chunked * &#x60;string&#x60;: concatenate the strings * &#x60;list&#x60;: concatenate the lists. If the last element in a list is a &#x60;string&#x60;, &#x60;list&#x60;, or &#x60;object&#x60;, merge it with the first element in the next list by applying these rules recursively. * &#x60;object&#x60;: concatenate the (field name, field value) pairs. If a field name is duplicated, then apply these rules recursively to merge the field values. Some examples of merging: # Strings are concatenated. \&quot;foo\&quot;, \&quot;bar\&quot; &#x3D;&gt; \&quot;foobar\&quot; # Lists of non-strings are concatenated. [2, 3], [4] &#x3D;&gt; [2, 3, 4] # Lists are concatenated, but the last and first elements are merged # because they are strings. [\&quot;a\&quot;, \&quot;b\&quot;], [\&quot;c\&quot;, \&quot;d\&quot;] &#x3D;&gt; [\&quot;a\&quot;, \&quot;bc\&quot;, \&quot;d\&quot;] # Lists are concatenated, but the last and first elements are merged # because they are lists. Recursively, the last and first elements # of the inner lists are merged because they are strings. [\&quot;a\&quot;, [\&quot;b\&quot;, \&quot;c\&quot;]], [[\&quot;d\&quot;], \&quot;e\&quot;] &#x3D;&gt; [\&quot;a\&quot;, [\&quot;b\&quot;, \&quot;cd\&quot;], \&quot;e\&quot;] # Non-overlapping object fields are combined. {\&quot;a\&quot;: \&quot;1\&quot;}, {\&quot;b\&quot;: \&quot;2\&quot;} &#x3D;&gt; {\&quot;a\&quot;: \&quot;1\&quot;, \&quot;b\&quot;: 2\&quot;} # Overlapping object fields are merged. {\&quot;a\&quot;: \&quot;1\&quot;}, {\&quot;a\&quot;: \&quot;2\&quot;} &#x3D;&gt; {\&quot;a\&quot;: \&quot;12\&quot;} # Examples of merging objects containing lists of strings. {\&quot;a\&quot;: [\&quot;1\&quot;]}, {\&quot;a\&quot;: [\&quot;2\&quot;]} &#x3D;&gt; {\&quot;a\&quot;: [\&quot;12\&quot;]} For a more complete example, suppose a streaming SQL query is yielding a result set whose rows contain a single string field. The following &#x60;PartialResultSet&#x60;s might be yielded: { \&quot;metadata\&quot;: { ... } \&quot;values\&quot;: [\&quot;Hello\&quot;, \&quot;W\&quot;] \&quot;chunked_value\&quot;: true \&quot;resume_token\&quot;: \&quot;Af65...\&quot; } { \&quot;values\&quot;: [\&quot;orl\&quot;] \&quot;chunked_value\&quot;: true } { \&quot;values\&quot;: [\&quot;d\&quot;] \&quot;resume_token\&quot;: \&quot;Zx1B...\&quot; } This sequence of &#x60;PartialResultSet&#x60;s encodes two rows, one containing the field value &#x60;\&quot;Hello\&quot;&#x60;, and a second containing the field value &#x60;\&quot;World\&quot; &#x3D; \&quot;W\&quot; + \&quot;orl\&quot; + \&quot;d\&quot;&#x60;. Not all &#x60;PartialResultSet&#x60;s contain a &#x60;resume_token&#x60;. Execution can only be resumed from a previously yielded &#x60;resume_token&#x60;. For the above sequence of &#x60;PartialResultSet&#x60;s, resuming the query with &#x60;\&quot;resume_token\&quot;: \&quot;Af65...\&quot;&#x60; will yield results from the &#x60;PartialResultSet&#x60; with value &#x60;[\&quot;orl\&quot;]&#x60;. | [optional] 

## Example

```python
from openapi_client.models.partial_result_set import PartialResultSet

# TODO update the JSON string below
json = "{}"
# create an instance of PartialResultSet from a JSON string
partial_result_set_instance = PartialResultSet.from_json(json)
# print the JSON string representation of the object
print(PartialResultSet.to_json())

# convert the object into a dict
partial_result_set_dict = partial_result_set_instance.to_dict()
# create an instance of PartialResultSet from a dict
partial_result_set_from_dict = PartialResultSet.from_dict(partial_result_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


