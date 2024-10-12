# CheckServiceProviderAvailabilityInput

Class for CheckServiceProviderAvailabilityInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**peering_service_location** | **str** | Gets or sets the PeeringServiceLocation | [optional] 
**peering_service_provider** | **str** | Gets or sets the PeeringServiceProvider | [optional] 

## Example

```python
from openapi_client.models.check_service_provider_availability_input import CheckServiceProviderAvailabilityInput

# TODO update the JSON string below
json = "{}"
# create an instance of CheckServiceProviderAvailabilityInput from a JSON string
check_service_provider_availability_input_instance = CheckServiceProviderAvailabilityInput.from_json(json)
# print the JSON string representation of the object
print(CheckServiceProviderAvailabilityInput.to_json())

# convert the object into a dict
check_service_provider_availability_input_dict = check_service_provider_availability_input_instance.to_dict()
# create an instance of CheckServiceProviderAvailabilityInput from a dict
check_service_provider_availability_input_from_dict = CheckServiceProviderAvailabilityInput.from_dict(check_service_provider_availability_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


