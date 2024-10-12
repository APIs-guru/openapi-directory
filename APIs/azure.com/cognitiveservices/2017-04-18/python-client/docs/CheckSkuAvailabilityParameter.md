# CheckSkuAvailabilityParameter

Check SKU availability parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Required. Indicates the type of cognitive service account. | 
**skus** | **List[str]** | The SKU of the resource. | 
**type** | **str** | The Type of the resource. | 

## Example

```python
from openapi_client.models.check_sku_availability_parameter import CheckSkuAvailabilityParameter

# TODO update the JSON string below
json = "{}"
# create an instance of CheckSkuAvailabilityParameter from a JSON string
check_sku_availability_parameter_instance = CheckSkuAvailabilityParameter.from_json(json)
# print the JSON string representation of the object
print(CheckSkuAvailabilityParameter.to_json())

# convert the object into a dict
check_sku_availability_parameter_dict = check_sku_availability_parameter_instance.to_dict()
# create an instance of CheckSkuAvailabilityParameter from a dict
check_sku_availability_parameter_from_dict = CheckSkuAvailabilityParameter.from_dict(check_sku_availability_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


