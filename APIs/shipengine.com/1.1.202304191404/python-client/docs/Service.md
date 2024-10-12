# Service

A service offered by the carrier

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_code** | **str** | A string that uniquely identifies a ShipEngine resource, such as a carrier, label, shipment, etc. | [optional] 
**carrier_id** | **str** | A string that uniquely identifies the carrier | [optional] [readonly] 
**domestic** | **bool** | Supports domestic shipping | [optional] [readonly] 
**international** | **bool** | Supports international shipping. | [optional] [readonly] 
**is_multi_package_supported** | **bool** | Carrier supports multiple packages per shipment | [optional] [readonly] 
**name** | **str** | User friendly service name | [optional] [readonly] 
**service_code** | **str** | service code | [optional] [readonly] 

## Example

```python
from openapi_client.models.service import Service

# TODO update the JSON string below
json = "{}"
# create an instance of Service from a JSON string
service_instance = Service.from_json(json)
# print the JSON string representation of the object
print(Service.to_json())

# convert the object into a dict
service_dict = service_instance.to_dict()
# create an instance of Service from a dict
service_from_dict = Service.from_dict(service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


