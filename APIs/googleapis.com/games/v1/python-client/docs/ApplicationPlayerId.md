# ApplicationPlayerId

Primary scoped player identifier for an application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** | The application that this player identifier is for. | [optional] 
**player_id** | **str** | The player identifier for the application. | [optional] 

## Example

```python
from openapi_client.models.application_player_id import ApplicationPlayerId

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPlayerId from a JSON string
application_player_id_instance = ApplicationPlayerId.from_json(json)
# print the JSON string representation of the object
print(ApplicationPlayerId.to_json())

# convert the object into a dict
application_player_id_dict = application_player_id_instance.to_dict()
# create an instance of ApplicationPlayerId from a dict
application_player_id_from_dict = ApplicationPlayerId.from_dict(application_player_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


