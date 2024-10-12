# GroupFindingsRequest

Request message for grouping by findings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compare_duration** | **str** | When compare_duration is set, the GroupResult&#39;s \&quot;state_change\&quot; attribute is updated to indicate whether the finding had its state changed, the finding&#39;s state remained unchanged, or if the finding was added during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don&#39;t affect the result. For example, the results aren&#39;t affected if the finding is made inactive and then active again. Possible \&quot;state_change\&quot; values when compare_duration is specified: * \&quot;CHANGED\&quot;: indicates that the finding was present and matched the given filter at the start of compare_duration, but changed its state at read_time. * \&quot;UNCHANGED\&quot;: indicates that the finding was present and matched the given filter at the start of compare_duration and did not change state at read_time. * \&quot;ADDED\&quot;: indicates that the finding did not match the given filter or was not present at the start of compare_duration, but was present at read_time. * \&quot;REMOVED\&quot;: indicates that the finding was present and matched the filter at the start of compare_duration, but did not match the filter at read_time. If compare_duration is not specified, then the only possible state_change is \&quot;UNUSED\&quot;, which will be the state_change set for all findings present at read_time. If this field is set then &#x60;state_change&#x60; must be a specified field in &#x60;group_by&#x60;. | [optional] 
**filter** | **str** | Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators &#x60;AND&#x60; and &#x60;OR&#x60;. Parentheses are supported, and &#x60;OR&#x60; has higher precedence than &#x60;AND&#x60;. Restrictions have the form &#x60; &#x60; and may have a &#x60;-&#x60; character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * &#x60;&#x3D;&#x60; for all value types. * &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; for integer values. * &#x60;:&#x60;, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals &#x60;true&#x60; and &#x60;false&#x60; without quotes. The following field and operator combinations are supported: * name: &#x60;&#x3D;&#x60; * parent: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * state: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * category: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * external_uri: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * event_time: &#x60;&#x3D;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: &#x60;event_time &#x3D; \&quot;2019-06-10T16:07:18-07:00\&quot;&#x60; &#x60;event_time &#x3D; 1560208038000&#x60; * severity: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * workflow_state: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * security_marks.marks: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * source_properties: &#x60;&#x3D;&#x60;, &#x60;:&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; For example, &#x60;source_properties.size &#x3D; 100&#x60; is a valid filter string. Use a partial match on the empty string to filter based on a property existing: &#x60;source_properties.my_property : \&quot;\&quot;&#x60; Use a negated partial match on the empty string to filter based on a property not existing: &#x60;-source_properties.my_property : \&quot;\&quot;&#x60; * resource: * resource.name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.parent_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.parent_display_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.project_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.project_display_name: &#x60;&#x3D;&#x60;, &#x60;:&#x60; * resource.type: &#x60;&#x3D;&#x60;, &#x60;:&#x60; | [optional] 
**group_by** | **str** | Required. Expression that defines what assets fields to use for grouping (including &#x60;state_change&#x60;). The string value should follow SQL syntax: comma separated list of fields. For example: \&quot;parent,resource_name\&quot;. The following fields are supported: * resource_name * category * state * parent * severity The following fields are supported when compare_duration is set: * state_change | [optional] 
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


