# CheckAvailabilityResult

Description of a CheckAvailability resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_availiable** | **bool** | True if the name is available and can be used to create new Namespace/NotificationHub. Otherwise false. | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.check_availability_result import CheckAvailabilityResult

# TODO update the JSON string below
json = "{}"
# create an instance of CheckAvailabilityResult from a JSON string
check_availability_result_instance = CheckAvailabilityResult.from_json(json)
# print the JSON string representation of the object
print(CheckAvailabilityResult.to_json())

# convert the object into a dict
check_availability_result_dict = check_availability_result_instance.to_dict()
# create an instance of CheckAvailabilityResult from a dict
check_availability_result_from_dict = CheckAvailabilityResult.from_dict(check_availability_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


