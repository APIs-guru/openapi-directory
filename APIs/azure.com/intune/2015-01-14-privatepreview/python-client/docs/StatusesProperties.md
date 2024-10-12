# StatusesProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_policies** | **int** |  | [optional] [readonly] 
**enrolled_users** | **int** |  | [optional] [readonly] 
**flagged_users** | **int** |  | [optional] [readonly] 
**last_modified_time** | **datetime** |  | [optional] [readonly] 
**policy_applied_users** | **int** |  | [optional] [readonly] 
**status** | **str** |  | [optional] [readonly] 
**wipe_failed_apps** | **int** |  | [optional] [readonly] 
**wipe_pending_apps** | **int** |  | [optional] [readonly] 
**wipe_succeeded_apps** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.statuses_properties import StatusesProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StatusesProperties from a JSON string
statuses_properties_instance = StatusesProperties.from_json(json)
# print the JSON string representation of the object
print(StatusesProperties.to_json())

# convert the object into a dict
statuses_properties_dict = statuses_properties_instance.to_dict()
# create an instance of StatusesProperties from a dict
statuses_properties_from_dict = StatusesProperties.from_dict(statuses_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


