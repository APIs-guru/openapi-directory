# NameAvailability

Name availability payload which is exposed in the response of the resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Gets or sets the message. | [optional] 
**name_available** | **bool** | Gets or sets the value indicating whether the name is available. | [optional] 
**reason** | **str** | Gets or sets the name availability reason. | [optional] 

## Example

```python
from openapi_client.models.name_availability import NameAvailability

# TODO update the JSON string below
json = "{}"
# create an instance of NameAvailability from a JSON string
name_availability_instance = NameAvailability.from_json(json)
# print the JSON string representation of the object
print(NameAvailability.to_json())

# convert the object into a dict
name_availability_dict = name_availability_instance.to_dict()
# create an instance of NameAvailability from a dict
name_availability_from_dict = NameAvailability.from_dict(name_availability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


