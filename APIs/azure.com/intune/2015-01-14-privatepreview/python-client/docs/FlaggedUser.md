# FlaggedUser

Flagged user for the given tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**FlaggedUserProperties**](FlaggedUserProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource Tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.flagged_user import FlaggedUser

# TODO update the JSON string below
json = "{}"
# create an instance of FlaggedUser from a JSON string
flagged_user_instance = FlaggedUser.from_json(json)
# print the JSON string representation of the object
print(FlaggedUser.to_json())

# convert the object into a dict
flagged_user_dict = flagged_user_instance.to_dict()
# create an instance of FlaggedUser from a dict
flagged_user_from_dict = FlaggedUser.from_dict(flagged_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


