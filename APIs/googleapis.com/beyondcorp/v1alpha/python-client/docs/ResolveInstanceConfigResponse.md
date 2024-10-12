# ResolveInstanceConfigResponse

Response message for BeyondCorp.ResolveInstanceConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_config** | [**ConnectorInstanceConfig**](ConnectorInstanceConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.resolve_instance_config_response import ResolveInstanceConfigResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResolveInstanceConfigResponse from a JSON string
resolve_instance_config_response_instance = ResolveInstanceConfigResponse.from_json(json)
# print the JSON string representation of the object
print(ResolveInstanceConfigResponse.to_json())

# convert the object into a dict
resolve_instance_config_response_dict = resolve_instance_config_response_instance.to_dict()
# create an instance of ResolveInstanceConfigResponse from a dict
resolve_instance_config_response_from_dict = ResolveInstanceConfigResponse.from_dict(resolve_instance_config_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


