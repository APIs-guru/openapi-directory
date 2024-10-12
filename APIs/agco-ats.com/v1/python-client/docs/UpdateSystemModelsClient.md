# UpdateSystemModelsClient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Read Only. The id of the client | [optional] 
**last_checkin** | **datetime** | Read Only. The time of the client&#39;s last checkin with the server. | [optional] 
**tag** | **str** | A description of the client that can be used for easy reference | [optional] 

## Example

```python
from openapi_client.models.update_system_models_client import UpdateSystemModelsClient

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsClient from a JSON string
update_system_models_client_instance = UpdateSystemModelsClient.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsClient.to_json())

# convert the object into a dict
update_system_models_client_dict = update_system_models_client_instance.to_dict()
# create an instance of UpdateSystemModelsClient from a dict
update_system_models_client_from_dict = UpdateSystemModelsClient.from_dict(update_system_models_client_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


