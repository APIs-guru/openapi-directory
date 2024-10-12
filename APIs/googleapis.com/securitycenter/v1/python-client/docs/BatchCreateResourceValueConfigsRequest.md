# BatchCreateResourceValueConfigsRequest

Request message to create multiple resource value configs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[CreateResourceValueConfigRequest]**](CreateResourceValueConfigRequest.md) | Required. The resource value configs to be created. | [optional] 

## Example

```python
from openapi_client.models.batch_create_resource_value_configs_request import BatchCreateResourceValueConfigsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateResourceValueConfigsRequest from a JSON string
batch_create_resource_value_configs_request_instance = BatchCreateResourceValueConfigsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchCreateResourceValueConfigsRequest.to_json())

# convert the object into a dict
batch_create_resource_value_configs_request_dict = batch_create_resource_value_configs_request_instance.to_dict()
# create an instance of BatchCreateResourceValueConfigsRequest from a dict
batch_create_resource_value_configs_request_from_dict = BatchCreateResourceValueConfigsRequest.from_dict(batch_create_resource_value_configs_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


