# NameAvailabilityRequest

Name availability request payload which is exposed in the request of the resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name to check. | [optional] 
**type** | **str** | Gets or sets the type of the resource to check. | [optional] 

## Example

```python
from openapi_client.models.name_availability_request import NameAvailabilityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of NameAvailabilityRequest from a JSON string
name_availability_request_instance = NameAvailabilityRequest.from_json(json)
# print the JSON string representation of the object
print(NameAvailabilityRequest.to_json())

# convert the object into a dict
name_availability_request_dict = name_availability_request_instance.to_dict()
# create an instance of NameAvailabilityRequest from a dict
name_availability_request_from_dict = NameAvailabilityRequest.from_dict(name_availability_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


