# ConfigDeleteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | 
**message** | **str** |  | 
**result** | [**ConfigDeleteResponseResult**](ConfigDeleteResponseResult.md) |  | 

## Example

```python
from openapi_client.models.config_delete_response import ConfigDeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigDeleteResponse from a JSON string
config_delete_response_instance = ConfigDeleteResponse.from_json(json)
# print the JSON string representation of the object
print(ConfigDeleteResponse.to_json())

# convert the object into a dict
config_delete_response_dict = config_delete_response_instance.to_dict()
# create an instance of ConfigDeleteResponse from a dict
config_delete_response_from_dict = ConfigDeleteResponse.from_dict(config_delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


