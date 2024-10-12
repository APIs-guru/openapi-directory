# GroupFindingsRequest

Request message for grouping by findings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators &#x60;AND&#x60; and &#x60;OR&#x60;. Parentheses are not supported, and &#x60;OR&#x60; has higher precedence than &#x60;AND&#x60;. Restrictions have the form &#x60; &#x60; and may have a &#x60;-&#x60; character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * &#x60;&#x3D;&#x60; for all value types. * &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; for integer values. * &#x60;:&#x60;, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals &#x60;true&#x60; and &#x60;false&#x60; without quotes. For example, &#x60;source_properties.size &#x3D; 100&#x60; is a valid filter string. | [optional] 
**group_by** | **str** | Required. Expression that defines what assets fields to use for grouping (including &#x60;state&#x60;). The string value should follow SQL syntax: comma separated list of fields. For example: \&quot;parent,resource_name\&quot;. The following fields are supported: * resource_name * category * state * parent | [optional] 
**page_size** | **int** | The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. | [optional] 
**page_token** | **str** | The value returned by the last &#x60;GroupFindingsResponse&#x60;; indicates that this is a continuation of a prior &#x60;GroupFindings&#x60; call, and that the system should return the next page of data. | [optional] 
**read_time** | **str** | Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API&#39;s version of NOW. | [optional] 

## Example

```python
from openapi_client.models.group_findings_request import GroupFindingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GroupFindingsRequest from a JSON string
group_findings_request_instance = GroupFindingsRequest.from_json(json)
# print the JSON string representation of the object
print(GroupFindingsRequest.to_json())

# convert the object into a dict
group_findings_request_dict = group_findings_request_instance.to_dict()
# create an instance of GroupFindingsRequest from a dict
group_findings_request_from_dict = GroupFindingsRequest.from_dict(group_findings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


