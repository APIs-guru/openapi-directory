# AddActionForwardRequestConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forward** | **str** |  | 
**var_from** | **str** |  | 
**key** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.add_action_forward_request_config import AddActionForwardRequestConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AddActionForwardRequestConfig from a JSON string
add_action_forward_request_config_instance = AddActionForwardRequestConfig.from_json(json)
# print the JSON string representation of the object
print(AddActionForwardRequestConfig.to_json())

# convert the object into a dict
add_action_forward_request_config_dict = add_action_forward_request_config_instance.to_dict()
# create an instance of AddActionForwardRequestConfig from a dict
add_action_forward_request_config_from_dict = AddActionForwardRequestConfig.from_dict(add_action_forward_request_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


