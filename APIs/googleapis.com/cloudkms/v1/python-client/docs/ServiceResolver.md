# ServiceResolver

A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_filter** | **str** | Optional. The filter applied to the endpoints of the resolved service. If no filter is specified, all endpoints will be considered. An endpoint will be chosen arbitrarily from the filtered list for each request. For endpoint filter syntax and examples, see https://cloud.google.com/service-directory/docs/reference/rpc/google.cloud.servicedirectory.v1#resolveservicerequest. | [optional] 
**hostname** | **str** | Required. The hostname of the EKM replica used at TLS and HTTP layers. | [optional] 
**server_certificates** | [**List[Certificate]**](Certificate.md) | Required. A list of leaf server certificates used to authenticate HTTPS connections to the EKM replica. Currently, a maximum of 10 Certificate is supported. | [optional] 
**service_directory_service** | **str** | Required. The resource name of the Service Directory service pointing to an EKM replica, in the format &#x60;projects/*/locations/*/namespaces/*/services/*&#x60;. | [optional] 

## Example

```python
from openapi_client.models.service_resolver import ServiceResolver

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceResolver from a JSON string
service_resolver_instance = ServiceResolver.from_json(json)
# print the JSON string representation of the object
print(ServiceResolver.to_json())

# convert the object into a dict
service_resolver_dict = service_resolver_instance.to_dict()
# create an instance of ServiceResolver from a dict
service_resolver_from_dict = ServiceResolver.from_dict(service_resolver_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


