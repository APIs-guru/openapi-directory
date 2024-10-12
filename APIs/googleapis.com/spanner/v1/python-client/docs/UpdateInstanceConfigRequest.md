# UpdateInstanceConfigRequest

The request for UpdateInstanceConfigRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_config** | [**InstanceConfig**](InstanceConfig.md) |  | [optional] 
**update_mask** | **str** | Required. A mask specifying which fields in InstanceConfig should be updated. The field mask must always be specified; this prevents any future fields in InstanceConfig from being erased accidentally by clients that do not know about them. Only display_name and labels can be updated. | [optional] 
**validate_only** | **bool** | An option to validate, but not actually execute, a request, and provide the same response. | [optional] 

## Example

```python
from openapi_client.models.update_instance_config_request import UpdateInstanceConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateInstanceConfigRequest from a JSON string
update_instance_config_request_instance = UpdateInstanceConfigRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateInstanceConfigRequest.to_json())

# convert the object into a dict
update_instance_config_request_dict = update_instance_config_request_instance.to_dict()
# create an instance of UpdateInstanceConfigRequest from a dict
update_instance_config_request_from_dict = UpdateInstanceConfigRequest.from_dict(update_instance_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


