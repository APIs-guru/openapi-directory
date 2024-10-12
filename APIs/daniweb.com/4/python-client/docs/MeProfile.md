# MeProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**introduction** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.me_profile import MeProfile

# TODO update the JSON string below
json = "{}"
# create an instance of MeProfile from a JSON string
me_profile_instance = MeProfile.from_json(json)
# print the JSON string representation of the object
print(MeProfile.to_json())

# convert the object into a dict
me_profile_dict = me_profile_instance.to_dict()
# create an instance of MeProfile from a dict
me_profile_from_dict = MeProfile.from_dict(me_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


