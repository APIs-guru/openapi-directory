# CheckNameAvailabilityInput

The request body for CheckNameAvailability API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the resource. A name must be globally unique. | 
**type** | [**ResourceType**](ResourceType.md) |  | 

## Example

```python
from openapi_client.models.check_name_availability_input import CheckNameAvailabilityInput

# TODO update the JSON string below
json = "{}"
# create an instance of CheckNameAvailabilityInput from a JSON string
check_name_availability_input_instance = CheckNameAvailabilityInput.from_json(json)
# print the JSON string representation of the object
print(CheckNameAvailabilityInput.to_json())

# convert the object into a dict
check_name_availability_input_dict = check_name_availability_input_instance.to_dict()
# create an instance of CheckNameAvailabilityInput from a dict
check_name_availability_input_from_dict = CheckNameAvailabilityInput.from_dict(check_name_availability_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


