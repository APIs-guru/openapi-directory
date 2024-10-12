# PeopleSuggestion

This field contains information about the person being suggested.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**person** | [**Person**](Person.md) |  | [optional] 

## Example

```python
from openapi_client.models.people_suggestion import PeopleSuggestion

# TODO update the JSON string below
json = "{}"
# create an instance of PeopleSuggestion from a JSON string
people_suggestion_instance = PeopleSuggestion.from_json(json)
# print the JSON string representation of the object
print(PeopleSuggestion.to_json())

# convert the object into a dict
people_suggestion_dict = people_suggestion_instance.to_dict()
# create an instance of PeopleSuggestion from a dict
people_suggestion_from_dict = PeopleSuggestion.from_dict(people_suggestion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


