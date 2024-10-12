# NameAvailabilityInfo

Description of name availability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | message containing a etailed reason name is unavailable | [optional] 
**name_available** | **bool** | specifies if a name is available or not | [optional] 
**reason** | **str** | specifies the reason a name is unavailable | [optional] 

## Example

```python
from openapi_client.models.name_availability_info import NameAvailabilityInfo

# TODO update the JSON string below
json = "{}"
# create an instance of NameAvailabilityInfo from a JSON string
name_availability_info_instance = NameAvailabilityInfo.from_json(json)
# print the JSON string representation of the object
print(NameAvailabilityInfo.to_json())

# convert the object into a dict
name_availability_info_dict = name_availability_info_instance.to_dict()
# create an instance of NameAvailabilityInfo from a dict
name_availability_info_from_dict = NameAvailabilityInfo.from_dict(name_availability_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


