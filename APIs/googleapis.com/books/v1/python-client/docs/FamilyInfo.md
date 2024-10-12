# FamilyInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Resource type. | [optional] 
**membership** | [**FamilyInfoMembership**](FamilyInfoMembership.md) |  | [optional] 

## Example

```python
from openapi_client.models.family_info import FamilyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FamilyInfo from a JSON string
family_info_instance = FamilyInfo.from_json(json)
# print the JSON string representation of the object
print(FamilyInfo.to_json())

# convert the object into a dict
family_info_dict = family_info_instance.to_dict()
# create an instance of FamilyInfo from a dict
family_info_from_dict = FamilyInfo.from_dict(family_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


