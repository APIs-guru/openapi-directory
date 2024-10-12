# NameAvailabilityStatus

The result of a request to check the availability of a resource name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | If any, the error message that provides more detail for the reason that the name is not available. | [optional] [readonly] 
**name_available** | **bool** | The value indicating whether the resource name is available. | [optional] [readonly] 
**reason** | **str** | If any, the reason that the name is not available. | [optional] [readonly] 

## Example

```python
from openapi_client.models.name_availability_status import NameAvailabilityStatus

# TODO update the JSON string below
json = "{}"
# create an instance of NameAvailabilityStatus from a JSON string
name_availability_status_instance = NameAvailabilityStatus.from_json(json)
# print the JSON string representation of the object
print(NameAvailabilityStatus.to_json())

# convert the object into a dict
name_availability_status_dict = name_availability_status_instance.to_dict()
# create an instance of NameAvailabilityStatus from a dict
name_availability_status_from_dict = NameAvailabilityStatus.from_dict(name_availability_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


