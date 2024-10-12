# ApiManagementServiceCheckNameAvailabilityParameters

Parameters supplied to the CheckNameAvailability operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name to check for availability. | 

## Example

```python
from openapi_client.models.api_management_service_check_name_availability_parameters import ApiManagementServiceCheckNameAvailabilityParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceCheckNameAvailabilityParameters from a JSON string
api_management_service_check_name_availability_parameters_instance = ApiManagementServiceCheckNameAvailabilityParameters.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceCheckNameAvailabilityParameters.to_json())

# convert the object into a dict
api_management_service_check_name_availability_parameters_dict = api_management_service_check_name_availability_parameters_instance.to_dict()
# create an instance of ApiManagementServiceCheckNameAvailabilityParameters from a dict
api_management_service_check_name_availability_parameters_from_dict = ApiManagementServiceCheckNameAvailabilityParameters.from_dict(api_management_service_check_name_availability_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


