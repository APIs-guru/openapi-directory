# SkuAvailabilityValidationResponseProperties

Properties of sku availability validation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Sku availability validation status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sku_availability_validation_response_properties import SkuAvailabilityValidationResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SkuAvailabilityValidationResponseProperties from a JSON string
sku_availability_validation_response_properties_instance = SkuAvailabilityValidationResponseProperties.from_json(json)
# print the JSON string representation of the object
print(SkuAvailabilityValidationResponseProperties.to_json())

# convert the object into a dict
sku_availability_validation_response_properties_dict = sku_availability_validation_response_properties_instance.to_dict()
# create an instance of SkuAvailabilityValidationResponseProperties from a dict
sku_availability_validation_response_properties_from_dict = SkuAvailabilityValidationResponseProperties.from_dict(sku_availability_validation_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


