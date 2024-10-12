# CheckAvailabilityParameters

Parameters supplied to the Check Name Availability for Namespace and NotificationHubs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id | [optional] [readonly] 
**is_availiable** | **bool** | True if the name is available and can be used to create new Namespace/NotificationHub. Otherwise false. | [optional] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.check_availability_parameters import CheckAvailabilityParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CheckAvailabilityParameters from a JSON string
check_availability_parameters_instance = CheckAvailabilityParameters.from_json(json)
# print the JSON string representation of the object
print(CheckAvailabilityParameters.to_json())

# convert the object into a dict
check_availability_parameters_dict = check_availability_parameters_instance.to_dict()
# create an instance of CheckAvailabilityParameters from a dict
check_availability_parameters_from_dict = CheckAvailabilityParameters.from_dict(check_availability_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


