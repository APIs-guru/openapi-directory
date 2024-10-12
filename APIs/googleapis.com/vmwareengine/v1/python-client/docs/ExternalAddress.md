# ExternalAddress

Represents an allocated external IP address and its corresponding internal IP address in a private cloud.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Creation time of this resource. | [optional] [readonly] 
**description** | **str** | User-provided description for this resource. | [optional] 
**external_ip** | **str** | Output only. The external IP address of a workload VM. | [optional] [readonly] 
**internal_ip** | **str** | The internal IP address of a workload VM. | [optional] 
**name** | **str** | Output only. The resource name of this external IP address. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: &#x60;projects/my-project/locations/us-central1-a/privateClouds/my-cloud/externalAddresses/my-address&#x60; | [optional] [readonly] 
**state** | **str** | Output only. The state of the resource. | [optional] [readonly] 
**uid** | **str** | Output only. System-generated unique identifier for the resource. | [optional] [readonly] 
**update_time** | **str** | Output only. Last update time of this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.external_address import ExternalAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalAddress from a JSON string
external_address_instance = ExternalAddress.from_json(json)
# print the JSON string representation of the object
print(ExternalAddress.to_json())

# convert the object into a dict
external_address_dict = external_address_instance.to_dict()
# create an instance of ExternalAddress from a dict
external_address_from_dict = ExternalAddress.from_dict(external_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


