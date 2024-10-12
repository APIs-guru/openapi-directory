# CreateResourceValueConfigRequest

Request message to create single resource value config

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | **str** | Required. Resource name of the new ResourceValueConfig&#39;s parent. | [optional] 
**resource_value_config** | [**GoogleCloudSecuritycenterV1ResourceValueConfig**](GoogleCloudSecuritycenterV1ResourceValueConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_resource_value_config_request import CreateResourceValueConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateResourceValueConfigRequest from a JSON string
create_resource_value_config_request_instance = CreateResourceValueConfigRequest.from_json(json)
# print the JSON string representation of the object
print(CreateResourceValueConfigRequest.to_json())

# convert the object into a dict
create_resource_value_config_request_dict = create_resource_value_config_request_instance.to_dict()
# create an instance of CreateResourceValueConfigRequest from a dict
create_resource_value_config_request_from_dict = CreateResourceValueConfigRequest.from_dict(create_resource_value_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


