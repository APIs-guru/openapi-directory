# APIAutocompleteSchoolResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**school_matches** | [**List[APISchoolAC]**](APISchoolAC.md) | List of the schools that match the query | [optional] 

## Example

```python
from openapi_client.models.api_autocomplete_school_result import APIAutocompleteSchoolResult

# TODO update the JSON string below
json = "{}"
# create an instance of APIAutocompleteSchoolResult from a JSON string
api_autocomplete_school_result_instance = APIAutocompleteSchoolResult.from_json(json)
# print the JSON string representation of the object
print(APIAutocompleteSchoolResult.to_json())

# convert the object into a dict
api_autocomplete_school_result_dict = api_autocomplete_school_result_instance.to_dict()
# create an instance of APIAutocompleteSchoolResult from a dict
api_autocomplete_school_result_from_dict = APIAutocompleteSchoolResult.from_dict(api_autocomplete_school_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


