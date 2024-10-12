# CrashGroupLanguage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crash_count** | **int** | Count of languages. | [optional] 
**language_name** | **str** | Language name. | [optional] 

## Example

```python
from openapi_client.models.crash_group_language import CrashGroupLanguage

# TODO update the JSON string below
json = "{}"
# create an instance of CrashGroupLanguage from a JSON string
crash_group_language_instance = CrashGroupLanguage.from_json(json)
# print the JSON string representation of the object
print(CrashGroupLanguage.to_json())

# convert the object into a dict
crash_group_language_dict = crash_group_language_instance.to_dict()
# create an instance of CrashGroupLanguage from a dict
crash_group_language_from_dict = CrashGroupLanguage.from_dict(crash_group_language_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


