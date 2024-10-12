# ServerAutomaticTuning

Server-level Automatic Tuning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AutomaticTuningServerProperties**](AutomaticTuningServerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_automatic_tuning import ServerAutomaticTuning

# TODO update the JSON string below
json = "{}"
# create an instance of ServerAutomaticTuning from a JSON string
server_automatic_tuning_instance = ServerAutomaticTuning.from_json(json)
# print the JSON string representation of the object
print(ServerAutomaticTuning.to_json())

# convert the object into a dict
server_automatic_tuning_dict = server_automatic_tuning_instance.to_dict()
# create an instance of ServerAutomaticTuning from a dict
server_automatic_tuning_from_dict = ServerAutomaticTuning.from_dict(server_automatic_tuning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


