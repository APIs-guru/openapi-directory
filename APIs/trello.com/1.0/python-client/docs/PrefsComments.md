# PrefsComments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | One of: disabled, members, observers, org or public | [optional] 

## Example

```python
from openapi_client.models.prefs_comments import PrefsComments

# TODO update the JSON string below
json = "{}"
# create an instance of PrefsComments from a JSON string
prefs_comments_instance = PrefsComments.from_json(json)
# print the JSON string representation of the object
print(PrefsComments.to_json())

# convert the object into a dict
prefs_comments_dict = prefs_comments_instance.to_dict()
# create an instance of PrefsComments from a dict
prefs_comments_from_dict = PrefsComments.from_dict(prefs_comments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


