# CheckSkuAvailabilityResult

Check SKU availability result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Required. Indicates the type of cognitive service account. | [optional] 
**message** | **str** | Additional error message. | [optional] 
**reason** | **str** | Reason why the SKU is not available. | [optional] 
**sku_available** | **bool** | Indicates the given SKU is available or not. | [optional] 
**sku_name** | **str** | The name of SKU. | [optional] 
**type** | **str** | The Type of the resource. | [optional] 

## Example

```python
from openapi_client.models.check_sku_availability_result import CheckSkuAvailabilityResult

# TODO update the JSON string below
json = "{}"
# create an instance of CheckSkuAvailabilityResult from a JSON string
check_sku_availability_result_instance = CheckSkuAvailabilityResult.from_json(json)
# print the JSON string representation of the object
print(CheckSkuAvailabilityResult.to_json())

# convert the object into a dict
check_sku_availability_result_dict = check_sku_availability_result_instance.to_dict()
# create an instance of CheckSkuAvailabilityResult from a dict
check_sku_availability_result_from_dict = CheckSkuAvailabilityResult.from_dict(check_sku_availability_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


