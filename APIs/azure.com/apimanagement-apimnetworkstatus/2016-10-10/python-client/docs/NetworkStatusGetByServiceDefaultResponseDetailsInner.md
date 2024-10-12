# NetworkStatusGetByServiceDefaultResponseDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.network_status_get_by_service_default_response_details_inner import NetworkStatusGetByServiceDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkStatusGetByServiceDefaultResponseDetailsInner from a JSON string
network_status_get_by_service_default_response_details_inner_instance = NetworkStatusGetByServiceDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(NetworkStatusGetByServiceDefaultResponseDetailsInner.to_json())

# convert the object into a dict
network_status_get_by_service_default_response_details_inner_dict = network_status_get_by_service_default_response_details_inner_instance.to_dict()
# create an instance of NetworkStatusGetByServiceDefaultResponseDetailsInner from a dict
network_status_get_by_service_default_response_details_inner_from_dict = NetworkStatusGetByServiceDefaultResponseDetailsInner.from_dict(network_status_get_by_service_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


