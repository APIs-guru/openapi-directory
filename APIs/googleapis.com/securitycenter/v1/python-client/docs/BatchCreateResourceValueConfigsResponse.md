# BatchCreateResourceValueConfigsResponse

Response message for BatchCreateResourceValueConfigs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_value_configs** | [**List[GoogleCloudSecuritycenterV1ResourceValueConfig]**](GoogleCloudSecuritycenterV1ResourceValueConfig.md) | The resource value configs created | [optional] 

## Example

```python
from openapi_client.models.batch_create_resource_value_configs_response import BatchCreateResourceValueConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateResourceValueConfigsResponse from a JSON string
batch_create_resource_value_configs_response_instance = BatchCreateResourceValueConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchCreateResourceValueConfigsResponse.to_json())

# convert the object into a dict
batch_create_resource_value_configs_response_dict = batch_create_resource_value_configs_response_instance.to_dict()
# create an instance of BatchCreateResourceValueConfigsResponse from a dict
batch_create_resource_value_configs_response_from_dict = BatchCreateResourceValueConfigsResponse.from_dict(batch_create_resource_value_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


