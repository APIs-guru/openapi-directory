# ListPreferenceSetsResponse

Response message for listing preference sets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token identifying a page of results the server should return. | [optional] 
**preference_sets** | [**List[PreferenceSet]**](PreferenceSet.md) | The list of PreferenceSets | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_preference_sets_response import ListPreferenceSetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPreferenceSetsResponse from a JSON string
list_preference_sets_response_instance = ListPreferenceSetsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPreferenceSetsResponse.to_json())

# convert the object into a dict
list_preference_sets_response_dict = list_preference_sets_response_instance.to_dict()
# create an instance of ListPreferenceSetsResponse from a dict
list_preference_sets_response_from_dict = ListPreferenceSetsResponse.from_dict(list_preference_sets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


