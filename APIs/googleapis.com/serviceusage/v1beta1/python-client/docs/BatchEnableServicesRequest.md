# BatchEnableServicesRequest

Request message for the `BatchEnableServices` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_ids** | **List[str]** | The identifiers of the services to enable on the project. A valid identifier would be: serviceusage.googleapis.com Enabling services requires that each service is public or is shared with the user enabling the service. Two or more services must be specified. To enable a single service, use the &#x60;EnableService&#x60; method instead. A single request can enable a maximum of 20 services at a time. If more than 20 services are specified, the request will fail, and no state changes will occur. | [optional] 

## Example

```python
from openapi_client.models.batch_enable_services_request import BatchEnableServicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchEnableServicesRequest from a JSON string
batch_enable_services_request_instance = BatchEnableServicesRequest.from_json(json)
# print the JSON string representation of the object
print(BatchEnableServicesRequest.to_json())

# convert the object into a dict
batch_enable_services_request_dict = batch_enable_services_request_instance.to_dict()
# create an instance of BatchEnableServicesRequest from a dict
batch_enable_services_request_from_dict = BatchEnableServicesRequest.from_dict(batch_enable_services_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


