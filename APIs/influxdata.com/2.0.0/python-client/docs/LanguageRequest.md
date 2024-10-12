# LanguageRequest

Flux query to be analyzed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** | Flux query script to be analyzed | 

## Example

```python
from openapi_client.models.language_request import LanguageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageRequest from a JSON string
language_request_instance = LanguageRequest.from_json(json)
# print the JSON string representation of the object
print(LanguageRequest.to_json())

# convert the object into a dict
language_request_dict = language_request_instance.to_dict()
# create an instance of LanguageRequest from a dict
language_request_from_dict = LanguageRequest.from_dict(language_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


