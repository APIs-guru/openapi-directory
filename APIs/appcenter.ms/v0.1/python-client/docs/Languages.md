# Languages


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**languages** | [**List[AnalyticsLanguageCounts200ResponseLanguagesInner]**](AnalyticsLanguageCounts200ResponseLanguagesInner.md) |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.languages import Languages

# TODO update the JSON string below
json = "{}"
# create an instance of Languages from a JSON string
languages_instance = Languages.from_json(json)
# print the JSON string representation of the object
print(Languages.to_json())

# convert the object into a dict
languages_dict = languages_instance.to_dict()
# create an instance of Languages from a dict
languages_from_dict = Languages.from_dict(languages_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


