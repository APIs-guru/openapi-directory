# ConfigsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | 
**message** | **str** |  | 
**result** | [**ConfigsResponseResult**](ConfigsResponseResult.md) |  | 

## Example

```python
from openapi_client.models.configs_response import ConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigsResponse from a JSON string
configs_response_instance = ConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(ConfigsResponse.to_json())

# convert the object into a dict
configs_response_dict = configs_response_instance.to_dict()
# create an instance of ConfigsResponse from a dict
configs_response_from_dict = ConfigsResponse.from_dict(configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


