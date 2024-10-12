# DiagnosticCategoryCollection

Collection of Diagnostic Categories

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[DiagnosticCategory]**](DiagnosticCategory.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.diagnostic_category_collection import DiagnosticCategoryCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticCategoryCollection from a JSON string
diagnostic_category_collection_instance = DiagnosticCategoryCollection.from_json(json)
# print the JSON string representation of the object
print(DiagnosticCategoryCollection.to_json())

# convert the object into a dict
diagnostic_category_collection_dict = diagnostic_category_collection_instance.to_dict()
# create an instance of DiagnosticCategoryCollection from a dict
diagnostic_category_collection_from_dict = DiagnosticCategoryCollection.from_dict(diagnostic_category_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


