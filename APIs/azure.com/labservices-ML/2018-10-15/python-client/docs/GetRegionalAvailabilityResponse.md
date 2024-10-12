# GetRegionalAvailabilityResponse

The response model from the GetRegionalAvailability action

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**regional_availability** | [**List[RegionalAvailability]**](RegionalAvailability.md) | Availability information for different size categories per region | [optional] 

## Example

```python
from openapi_client.models.get_regional_availability_response import GetRegionalAvailabilityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetRegionalAvailabilityResponse from a JSON string
get_regional_availability_response_instance = GetRegionalAvailabilityResponse.from_json(json)
# print the JSON string representation of the object
print(GetRegionalAvailabilityResponse.to_json())

# convert the object into a dict
get_regional_availability_response_dict = get_regional_availability_response_instance.to_dict()
# create an instance of GetRegionalAvailabilityResponse from a dict
get_regional_availability_response_from_dict = GetRegionalAvailabilityResponse.from_dict(get_regional_availability_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


