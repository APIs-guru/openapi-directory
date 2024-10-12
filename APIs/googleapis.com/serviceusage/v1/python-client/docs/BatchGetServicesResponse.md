# BatchGetServicesResponse

Response message for the `BatchGetServices` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**services** | [**List[GoogleApiServiceusageV1Service]**](GoogleApiServiceusageV1Service.md) | The requested Service states. | [optional] 

## Example

```python
from openapi_client.models.batch_get_services_response import BatchGetServicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetServicesResponse from a JSON string
batch_get_services_response_instance = BatchGetServicesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchGetServicesResponse.to_json())

# convert the object into a dict
batch_get_services_response_dict = batch_get_services_response_instance.to_dict()
# create an instance of BatchGetServicesResponse from a dict
batch_get_services_response_from_dict = BatchGetServicesResponse.from_dict(batch_get_services_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


