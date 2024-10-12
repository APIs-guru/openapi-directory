# ListCarrierServicesResponseBody

A carrier list services response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**services** | [**List[Service]**](Service.md) | An array of services associated with the carrier | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_carrier_services_response_body import ListCarrierServicesResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ListCarrierServicesResponseBody from a JSON string
list_carrier_services_response_body_instance = ListCarrierServicesResponseBody.from_json(json)
# print the JSON string representation of the object
print(ListCarrierServicesResponseBody.to_json())

# convert the object into a dict
list_carrier_services_response_body_dict = list_carrier_services_response_body_instance.to_dict()
# create an instance of ListCarrierServicesResponseBody from a dict
list_carrier_services_response_body_from_dict = ListCarrierServicesResponseBody.from_dict(list_carrier_services_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


