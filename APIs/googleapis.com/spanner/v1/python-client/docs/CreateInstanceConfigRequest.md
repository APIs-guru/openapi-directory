# CreateInstanceConfigRequest

The request for CreateInstanceConfigRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_config** | [**InstanceConfig**](InstanceConfig.md) |  | [optional] 
**instance_config_id** | **str** | Required. The ID of the instance config to create. Valid identifiers are of the form &#x60;custom-[-a-z0-9]*[a-z0-9]&#x60; and must be between 2 and 64 characters in length. The &#x60;custom-&#x60; prefix is required to avoid name conflicts with Google managed configurations. | [optional] 
**validate_only** | **bool** | An option to validate, but not actually execute, a request, and provide the same response. | [optional] 

## Example

```python
from openapi_client.models.create_instance_config_request import CreateInstanceConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateInstanceConfigRequest from a JSON string
create_instance_config_request_instance = CreateInstanceConfigRequest.from_json(json)
# print the JSON string representation of the object
print(CreateInstanceConfigRequest.to_json())

# convert the object into a dict
create_instance_config_request_dict = create_instance_config_request_instance.to_dict()
# create an instance of CreateInstanceConfigRequest from a dict
create_instance_config_request_from_dict = CreateInstanceConfigRequest.from_dict(create_instance_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


