# CheckNameAvailabilityOutput

The response body for CheckNameAvailability API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Specifies the detailed reason if the name is not available. | [optional] 
**name_available** | **bool** | Specifies if the name is available. | [optional] 
**reason** | **str** | Specifies the reason if the name is not available. | [optional] 

## Example

```python
from openapi_client.models.check_name_availability_output import CheckNameAvailabilityOutput

# TODO update the JSON string below
json = "{}"
# create an instance of CheckNameAvailabilityOutput from a JSON string
check_name_availability_output_instance = CheckNameAvailabilityOutput.from_json(json)
# print the JSON string representation of the object
print(CheckNameAvailabilityOutput.to_json())

# convert the object into a dict
check_name_availability_output_dict = check_name_availability_output_instance.to_dict()
# create an instance of CheckNameAvailabilityOutput from a dict
check_name_availability_output_from_dict = CheckNameAvailabilityOutput.from_dict(check_name_availability_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


