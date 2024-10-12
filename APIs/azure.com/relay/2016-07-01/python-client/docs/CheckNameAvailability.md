# CheckNameAvailability

Description of a Check Name availability request properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The Name to check the namespce name availability and The namespace name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number. | 

## Example

```python
from openapi_client.models.check_name_availability import CheckNameAvailability

# TODO update the JSON string below
json = "{}"
# create an instance of CheckNameAvailability from a JSON string
check_name_availability_instance = CheckNameAvailability.from_json(json)
# print the JSON string representation of the object
print(CheckNameAvailability.to_json())

# convert the object into a dict
check_name_availability_dict = check_name_availability_instance.to_dict()
# create an instance of CheckNameAvailability from a dict
check_name_availability_from_dict = CheckNameAvailability.from_dict(check_name_availability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


