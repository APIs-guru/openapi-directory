# RuleManagementEventDataSource

A rule management event data source. The discriminator fields is always RuleManagementEventDataSource in this case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claims** | [**RuleManagementEventClaimsDataSource**](RuleManagementEventClaimsDataSource.md) |  | [optional] 
**event_name** | **str** | the event name. | [optional] 
**event_source** | **str** | the event source. | [optional] 
**level** | **str** | the level. | [optional] 
**operation_name** | **str** | The name of the operation that should be checked for. If no name is provided, any operation will match. | [optional] 
**resource_group_name** | **str** | the resource group name. | [optional] 
**resource_provider_name** | **str** | the resource provider name. | [optional] 
**status** | **str** | The status of the operation that should be checked for. If no status is provided, any status will match. | [optional] 
**sub_status** | **str** | the substatus. | [optional] 

## Example

```python
from openapi_client.models.rule_management_event_data_source import RuleManagementEventDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of RuleManagementEventDataSource from a JSON string
rule_management_event_data_source_instance = RuleManagementEventDataSource.from_json(json)
# print the JSON string representation of the object
print(RuleManagementEventDataSource.to_json())

# convert the object into a dict
rule_management_event_data_source_dict = rule_management_event_data_source_instance.to_dict()
# create an instance of RuleManagementEventDataSource from a dict
rule_management_event_data_source_from_dict = RuleManagementEventDataSource.from_dict(rule_management_event_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


