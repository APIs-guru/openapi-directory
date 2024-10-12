# BatchEnableServicesResponse

Response message for the `BatchEnableServices` method. This response message is assigned to the `response` field of the returned Operation when that operation is done.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failures** | [**List[EnableFailure]**](EnableFailure.md) | If allow_partial_success is true, and one or more services could not be enabled, this field contains the details about each failure. | [optional] 
**services** | [**List[GoogleApiServiceusageV1Service]**](GoogleApiServiceusageV1Service.md) | The new state of the services after enabling. | [optional] 

## Example

```python
from openapi_client.models.batch_enable_services_response import BatchEnableServicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchEnableServicesResponse from a JSON string
batch_enable_services_response_instance = BatchEnableServicesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchEnableServicesResponse.to_json())

# convert the object into a dict
batch_enable_services_response_dict = batch_enable_services_response_instance.to_dict()
# create an instance of BatchEnableServicesResponse from a dict
batch_enable_services_response_from_dict = BatchEnableServicesResponse.from_dict(batch_enable_services_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


