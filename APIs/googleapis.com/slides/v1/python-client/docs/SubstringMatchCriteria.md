# SubstringMatchCriteria

A criteria that matches a specific string of text in a shape or table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_case** | **bool** | Indicates whether the search should respect case: - &#x60;True&#x60;: the search is case sensitive. - &#x60;False&#x60;: the search is case insensitive. | [optional] 
**text** | **str** | The text to search for in the shape or table. | [optional] 

## Example

```python
from openapi_client.models.substring_match_criteria import SubstringMatchCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of SubstringMatchCriteria from a JSON string
substring_match_criteria_instance = SubstringMatchCriteria.from_json(json)
# print the JSON string representation of the object
print(SubstringMatchCriteria.to_json())

# convert the object into a dict
substring_match_criteria_dict = substring_match_criteria_instance.to_dict()
# create an instance of SubstringMatchCriteria from a dict
substring_match_criteria_from_dict = SubstringMatchCriteria.from_dict(substring_match_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


