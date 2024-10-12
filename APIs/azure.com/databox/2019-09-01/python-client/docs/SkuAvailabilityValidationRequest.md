# SkuAvailabilityValidationRequest

Request to validate sku availability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | ISO country code. Country for hardware shipment. For codes check: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements | 
**device_type** | **str** | Device type to be used for the job. | 
**location** | **str** | Location for data transfer. For locations check: https://management.azure.com/subscriptions/SUBSCRIPTIONID/locations?api-version&#x3D;2018-01-01 | 
**transfer_type** | **str** | Type of the transfer. | 

## Example

```python
from openapi_client.models.sku_availability_validation_request import SkuAvailabilityValidationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SkuAvailabilityValidationRequest from a JSON string
sku_availability_validation_request_instance = SkuAvailabilityValidationRequest.from_json(json)
# print the JSON string representation of the object
print(SkuAvailabilityValidationRequest.to_json())

# convert the object into a dict
sku_availability_validation_request_dict = sku_availability_validation_request_instance.to_dict()
# create an instance of SkuAvailabilityValidationRequest from a dict
sku_availability_validation_request_from_dict = SkuAvailabilityValidationRequest.from_dict(sku_availability_validation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


