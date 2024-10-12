# CheckSpellingRussianRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lang_code** | **str** |  | [optional] 
**text** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.check_spelling_russian_request import CheckSpellingRussianRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CheckSpellingRussianRequest from a JSON string
check_spelling_russian_request_instance = CheckSpellingRussianRequest.from_json(json)
# print the JSON string representation of the object
print(CheckSpellingRussianRequest.to_json())

# convert the object into a dict
check_spelling_russian_request_dict = check_spelling_russian_request_instance.to_dict()
# create an instance of CheckSpellingRussianRequest from a dict
check_spelling_russian_request_from_dict = CheckSpellingRussianRequest.from_dict(check_spelling_russian_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


