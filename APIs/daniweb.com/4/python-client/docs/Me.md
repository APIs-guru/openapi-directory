# Me


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_card** | [**MeBusinessCard**](MeBusinessCard.md) |  | [optional] 
**community_persona** | [**Member**](Member.md) |  | [optional] 
**id** | **float** |  | 
**location** | [**MeLocation**](MeLocation.md) |  | [optional] 
**matching** | [**MeMatching**](MeMatching.md) |  | [optional] 
**profile** | [**MeProfile**](MeProfile.md) |  | [optional] 
**settings** | [**MeSettings**](MeSettings.md) |  | [optional] 
**usage** | [**MeUsage**](MeUsage.md) |  | [optional] 

## Example

```python
from openapi_client.models.me import Me

# TODO update the JSON string below
json = "{}"
# create an instance of Me from a JSON string
me_instance = Me.from_json(json)
# print the JSON string representation of the object
print(Me.to_json())

# convert the object into a dict
me_dict = me_instance.to_dict()
# create an instance of Me from a dict
me_from_dict = Me.from_dict(me_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


