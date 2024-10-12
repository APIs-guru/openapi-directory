# MatchPersonalFirstLastNameIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name1** | [**FirstLastNameIn**](FirstLastNameIn.md) |  | [optional] 
**name2** | [**PersonalNameIn**](PersonalNameIn.md) |  | [optional] 

## Example

```python
from openapi_client.models.match_personal_first_last_name_in import MatchPersonalFirstLastNameIn

# TODO update the JSON string below
json = "{}"
# create an instance of MatchPersonalFirstLastNameIn from a JSON string
match_personal_first_last_name_in_instance = MatchPersonalFirstLastNameIn.from_json(json)
# print the JSON string representation of the object
print(MatchPersonalFirstLastNameIn.to_json())

# convert the object into a dict
match_personal_first_last_name_in_dict = match_personal_first_last_name_in_instance.to_dict()
# create an instance of MatchPersonalFirstLastNameIn from a dict
match_personal_first_last_name_in_from_dict = MatchPersonalFirstLastNameIn.from_dict(match_personal_first_last_name_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


