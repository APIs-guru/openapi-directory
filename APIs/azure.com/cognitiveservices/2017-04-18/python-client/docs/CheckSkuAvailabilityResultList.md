# CheckSkuAvailabilityResultList

Check SKU availability result list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[CheckSkuAvailabilityResult]**](CheckSkuAvailabilityResult.md) | Check SKU availability result list. | [optional] 

## Example

```python
from openapi_client.models.check_sku_availability_result_list import CheckSkuAvailabilityResultList

# TODO update the JSON string below
json = "{}"
# create an instance of CheckSkuAvailabilityResultList from a JSON string
check_sku_availability_result_list_instance = CheckSkuAvailabilityResultList.from_json(json)
# print the JSON string representation of the object
print(CheckSkuAvailabilityResultList.to_json())

# convert the object into a dict
check_sku_availability_result_list_dict = check_sku_availability_result_list_instance.to_dict()
# create an instance of CheckSkuAvailabilityResultList from a dict
check_sku_availability_result_list_from_dict = CheckSkuAvailabilityResultList.from_dict(check_sku_availability_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


