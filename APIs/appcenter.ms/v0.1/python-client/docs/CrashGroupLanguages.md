# CrashGroupLanguages


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crash_count** | **int** |  | [optional] 
**languages** | [**List[CrashGroupLanguagesLanguagesInner]**](CrashGroupLanguagesLanguagesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.crash_group_languages import CrashGroupLanguages

# TODO update the JSON string below
json = "{}"
# create an instance of CrashGroupLanguages from a JSON string
crash_group_languages_instance = CrashGroupLanguages.from_json(json)
# print the JSON string representation of the object
print(CrashGroupLanguages.to_json())

# convert the object into a dict
crash_group_languages_dict = crash_group_languages_instance.to_dict()
# create an instance of CrashGroupLanguages from a dict
crash_group_languages_from_dict = CrashGroupLanguages.from_dict(crash_group_languages_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


