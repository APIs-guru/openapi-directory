# NetworkServiceChangeRequestPartial

NetworkServiceChangeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | The desired capacity of the service in Mbps.  Must be within the range of &#x60;bandwidth_min&#x60; and &#x60;bandwidth_max&#x60; of the &#x60;ProductOffering&#x60;.  When &#x60;null&#x60; the maximum capacity wil be used. | [optional] 
**product_offering** | **str** | Migrate to a diffrent product offering. Please note, that the offering only may differ in bandwidth. | [optional] 

## Example

```python
from openapi_client.models.network_service_change_request_partial import NetworkServiceChangeRequestPartial

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkServiceChangeRequestPartial from a JSON string
network_service_change_request_partial_instance = NetworkServiceChangeRequestPartial.from_json(json)
# print the JSON string representation of the object
print(NetworkServiceChangeRequestPartial.to_json())

# convert the object into a dict
network_service_change_request_partial_dict = network_service_change_request_partial_instance.to_dict()
# create an instance of NetworkServiceChangeRequestPartial from a dict
network_service_change_request_partial_from_dict = NetworkServiceChangeRequestPartial.from_dict(network_service_change_request_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


