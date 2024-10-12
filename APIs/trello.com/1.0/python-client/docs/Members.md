# Members


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_source** | **str** | One of: gravatar, none or upload | [optional] 
**bio** | **str** | a string with a length from 0 to 16384 | [optional] 
**full_name** | **str** | A string with a length of at least 1.  Cannot begin or end with a space. | [optional] 
**initials** | **str** | A string with a length from 1 to 4.  Cannot begin or end with a space | [optional] 
**prefs_color_blind** | **str** |  true or false | [optional] 
**prefs_locale** | **str** | a string with a length from 0 to 255 | [optional] 
**prefs_minutes_between_summaries** | **str** | -1 (disabled), 1 or 60 | [optional] 
**username** | **str** | A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique. | [optional] 

## Example

```python
from openapi_client.models.members import Members

# TODO update the JSON string below
json = "{}"
# create an instance of Members from a JSON string
members_instance = Members.from_json(json)
# print the JSON string representation of the object
print(Members.to_json())

# convert the object into a dict
members_dict = members_instance.to_dict()
# create an instance of Members from a dict
members_from_dict = Members.from_dict(members_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


