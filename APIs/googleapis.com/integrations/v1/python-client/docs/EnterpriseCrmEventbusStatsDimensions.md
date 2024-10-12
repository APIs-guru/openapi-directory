# EnterpriseCrmEventbusStatsDimensions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** |  | [optional] 
**enum_filter_type** | **str** | Whether to include or exclude the enums matching the regex. | [optional] 
**error_enum_string** | **str** |  | [optional] 
**retry_attempt** | **str** |  | [optional] 
**task_name** | **str** |  | [optional] 
**task_number** | **str** |  | [optional] 
**trigger_id** | **str** | Stats have been or will be aggregated on set fields for any semantically-meaningful combination. | [optional] 
**warning_enum_string** | **str** |  | [optional] 
**workflow_id** | **str** |  | [optional] 
**workflow_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_stats_dimensions import EnterpriseCrmEventbusStatsDimensions

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusStatsDimensions from a JSON string
enterprise_crm_eventbus_stats_dimensions_instance = EnterpriseCrmEventbusStatsDimensions.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusStatsDimensions.to_json())

# convert the object into a dict
enterprise_crm_eventbus_stats_dimensions_dict = enterprise_crm_eventbus_stats_dimensions_instance.to_dict()
# create an instance of EnterpriseCrmEventbusStatsDimensions from a dict
enterprise_crm_eventbus_stats_dimensions_from_dict = EnterpriseCrmEventbusStatsDimensions.from_dict(enterprise_crm_eventbus_stats_dimensions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


