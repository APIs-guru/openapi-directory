# CheckTrafficManagerRelativeDnsNameAvailabilityParameters

Parameters supplied to check Traffic Manager name operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the resource. | [optional] 
**type** | **str** | Gets or sets the type of the resource. | [optional] 

## Example

```python
from openapi_client.models.check_traffic_manager_relative_dns_name_availability_parameters import CheckTrafficManagerRelativeDnsNameAvailabilityParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CheckTrafficManagerRelativeDnsNameAvailabilityParameters from a JSON string
check_traffic_manager_relative_dns_name_availability_parameters_instance = CheckTrafficManagerRelativeDnsNameAvailabilityParameters.from_json(json)
# print the JSON string representation of the object
print(CheckTrafficManagerRelativeDnsNameAvailabilityParameters.to_json())

# convert the object into a dict
check_traffic_manager_relative_dns_name_availability_parameters_dict = check_traffic_manager_relative_dns_name_availability_parameters_instance.to_dict()
# create an instance of CheckTrafficManagerRelativeDnsNameAvailabilityParameters from a dict
check_traffic_manager_relative_dns_name_availability_parameters_from_dict = CheckTrafficManagerRelativeDnsNameAvailabilityParameters.from_dict(check_traffic_manager_relative_dns_name_availability_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


