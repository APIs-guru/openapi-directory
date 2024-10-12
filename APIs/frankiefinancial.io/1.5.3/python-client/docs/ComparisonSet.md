# ComparisonSet

This is the document that we want to compare to the original toDocument.  In the case of a selfie-check against a drivers licence:    * compareDocument will be the the selfie   * toDocument will be the drivers licence photo 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compare_document** | [**IdentityDocumentObject**](IdentityDocumentObject.md) |  | [optional] 
**to_document** | [**IdentityDocumentObject**](IdentityDocumentObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.comparison_set import ComparisonSet

# TODO update the JSON string below
json = "{}"
# create an instance of ComparisonSet from a JSON string
comparison_set_instance = ComparisonSet.from_json(json)
# print the JSON string representation of the object
print(ComparisonSet.to_json())

# convert the object into a dict
comparison_set_dict = comparison_set_instance.to_dict()
# create an instance of ComparisonSet from a dict
comparison_set_from_dict = ComparisonSet.from_dict(comparison_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


