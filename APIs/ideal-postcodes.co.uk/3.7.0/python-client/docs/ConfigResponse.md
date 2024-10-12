# ConfigResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | 
**message** | **str** |  | 
**result** | [**Config**](Config.md) |  | 

## Example

```python
from openapi_client.models.config_response import ConfigResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigResponse from a JSON string
config_response_instance = ConfigResponse.from_json(json)
# print the JSON string representation of the object
print(ConfigResponse.to_json())

# convert the object into a dict
config_response_dict = config_response_instance.to_dict()
# create an instance of ConfigResponse from a dict
config_response_from_dict = ConfigResponse.from_dict(config_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


