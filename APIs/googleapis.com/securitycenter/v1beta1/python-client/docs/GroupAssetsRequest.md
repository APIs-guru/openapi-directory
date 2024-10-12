# GroupAssetsRequest

Request message for grouping by assets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compare_duration** | **str** | When compare_duration is set, the Asset&#39;s \&quot;state\&quot; property is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don&#39;t affect the result. For example, the results aren&#39;t affected if the asset is removed and re-created again. Possible \&quot;state\&quot; values when compare_duration is specified: * \&quot;ADDED\&quot;: indicates that the asset was not present before compare_duration, but present at reference_time. * \&quot;REMOVED\&quot;: indicates that the asset was present at the start of compare_duration, but not present at reference_time. * \&quot;ACTIVE\&quot;: indicates that the asset was present at both the start and the end of the time period defined by compare_duration and reference_time. This field is ignored if &#x60;state&#x60; is not a field in &#x60;group_by&#x60;. | [optional] 
**filter** | **str** | Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators &#x60;AND&#x60; and &#x60;OR&#x60;. Parentheses are not supported, and &#x60;OR&#x60; has higher precedence than &#x60;AND&#x60;. Restrictions have the form &#x60; &#x60; and may have a &#x60;-&#x60; character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * &#x60;&#x3D;&#x60; for all value types. * &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; for integer values. * &#x60;:&#x60;, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals &#x60;true&#x60; and &#x60;false&#x60; without quotes. For example, &#x60;resource_properties.size &#x3D; 100&#x60; is a valid filter string. | [optional] 
**group_by** | **str** | Required. Expression that defines what assets fields to use for grouping. The string value should follow SQL syntax: comma separated list of fields. For example: \&quot;security_center_properties.resource_project,security_center_properties.project\&quot;. The following fields are supported when compare_duration is not set: * security_center_properties.resource_project * security_center_properties.resource_type * security_center_properties.resource_parent The following fields are supported when compare_duration is set: * security_center_properties.resource_type | [optional] 
**page_size** | **int** | The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000. | [optional] 
**page_token** | **str** | The value returned by the last &#x60;GroupAssetsResponse&#x60;; indicates that this is a continuation of a prior &#x60;GroupAssets&#x60; call, and that the system should return the next page of data. | [optional] 
**read_time** | **str** | Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API&#39;s version of NOW. | [optional] 

## Example

```python
from openapi_client.models.group_assets_request import GroupAssetsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GroupAssetsRequest from a JSON string
group_assets_request_instance = GroupAssetsRequest.from_json(json)
# print the JSON string representation of the object
print(GroupAssetsRequest.to_json())

# convert the object into a dict
group_assets_request_dict = group_assets_request_instance.to_dict()
# create an instance of GroupAssetsRequest from a dict
group_assets_request_from_dict = GroupAssetsRequest.from_dict(group_assets_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


