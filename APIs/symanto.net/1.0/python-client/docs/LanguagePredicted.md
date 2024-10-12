# LanguagePredicted


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_language** | **str** | the detected language_code corresponding to the input text. | 
**id** | **str** | id of the post. | [optional] 

## Example

```python
from openapi_client.models.language_predicted import LanguagePredicted

# TODO update the JSON string below
json = "{}"
# create an instance of LanguagePredicted from a JSON string
language_predicted_instance = LanguagePredicted.from_json(json)
# print the JSON string representation of the object
print(LanguagePredicted.to_json())

# convert the object into a dict
language_predicted_dict = language_predicted_instance.to_dict()
# create an instance of LanguagePredicted from a dict
language_predicted_from_dict = LanguagePredicted.from_dict(language_predicted_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


