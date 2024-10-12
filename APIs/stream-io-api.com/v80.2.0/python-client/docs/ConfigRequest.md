# ConfigRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_certificate** | **str** |  | 
**app_id** | **str** |  | 
**default_role** | **str** |  | [optional] 
**role_map** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.config_request import ConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigRequest from a JSON string
config_request_instance = ConfigRequest.from_json(json)
# print the JSON string representation of the object
print(ConfigRequest.to_json())

# convert the object into a dict
config_request_dict = config_request_instance.to_dict()
# create an instance of ConfigRequest from a dict
config_request_from_dict = ConfigRequest.from_dict(config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


