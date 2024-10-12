# CheckAvailabilityParameters

Parameters supplied to the Check Name Availability for Namespace and NotificationHubs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_availiable** | **bool** | Gets or sets true if the name is available and can be used to create new Namespace/NotificationHub. Otherwise false. | [optional] 
**location** | **str** | Gets or sets location. | [optional] 
**name** | **str** | Gets or sets name | 
**tags** | **Dict[str, str]** | Gets or sets tags. | [optional] 

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


