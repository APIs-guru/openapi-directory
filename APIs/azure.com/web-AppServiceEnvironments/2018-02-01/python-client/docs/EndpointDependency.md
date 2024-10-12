# EndpointDependency

A domain name that a service is reached at, including details of the current connection status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | The domain name of the dependency. | [optional] 
**endpoint_details** | [**List[EndpointDetail]**](EndpointDetail.md) | The IP Addresses and Ports used when connecting to DomainName. | [optional] 

## Example

```python
from openapi_client.models.endpoint_dependency import EndpointDependency

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointDependency from a JSON string
endpoint_dependency_instance = EndpointDependency.from_json(json)
# print the JSON string representation of the object
print(EndpointDependency.to_json())

# convert the object into a dict
endpoint_dependency_dict = endpoint_dependency_instance.to_dict()
# create an instance of EndpointDependency from a dict
endpoint_dependency_from_dict = EndpointDependency.from_dict(endpoint_dependency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


