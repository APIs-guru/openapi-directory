# UpdateSystemModelsClientStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The Client ID | [optional] 
**last_checkin** | **datetime** | The time of the client&#39;s last check-in | [optional] 
**minutes_elapsed** | **int** | The number of minutes that have passed since the last check-in | [optional] 
**report_result** | **str** | The result for the client included in the UpdateGroup&#39;s report | [optional] 
**report_result_is_valid** | **bool** | True if the result for the client matches what is expected for the UpdateGroup | [optional] 
**report_value** | **str** | The value for the client included in the UpdateGroup&#39;s report | [optional] 
**tag** | **str** | A descriptive name for the client | [optional] 

## Example

```python
from openapi_client.models.update_system_models_client_status import UpdateSystemModelsClientStatus

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsClientStatus from a JSON string
update_system_models_client_status_instance = UpdateSystemModelsClientStatus.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsClientStatus.to_json())

# convert the object into a dict
update_system_models_client_status_dict = update_system_models_client_status_instance.to_dict()
# create an instance of UpdateSystemModelsClientStatus from a dict
update_system_models_client_status_from_dict = UpdateSystemModelsClientStatus.from_dict(update_system_models_client_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


