# UsageReportEntity

Output only. Information about the type of the item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **str** | Output only. The unique identifier of the customer&#39;s account. | [optional] [readonly] 
**entity_id** | **str** | Output only. Object key. Only relevant if entity.type &#x3D; \&quot;OBJECT\&quot; Note: external-facing name of report is \&quot;Entities\&quot; rather than \&quot;Objects\&quot;. | [optional] [readonly] 
**profile_id** | **str** | Output only. The user&#39;s immutable Google Workspace profile identifier. | [optional] [readonly] 
**type** | **str** | Output only. The type of item. The value is &#x60;user&#x60;. | [optional] [readonly] 
**user_email** | **str** | Output only. The user&#39;s email address. Only relevant if entity.type &#x3D; \&quot;USER\&quot; | [optional] [readonly] 

## Example

```python
from openapi_client.models.usage_report_entity import UsageReportEntity

# TODO update the JSON string below
json = "{}"
# create an instance of UsageReportEntity from a JSON string
usage_report_entity_instance = UsageReportEntity.from_json(json)
# print the JSON string representation of the object
print(UsageReportEntity.to_json())

# convert the object into a dict
usage_report_entity_dict = usage_report_entity_instance.to_dict()
# create an instance of UsageReportEntity from a dict
usage_report_entity_from_dict = UsageReportEntity.from_dict(usage_report_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


