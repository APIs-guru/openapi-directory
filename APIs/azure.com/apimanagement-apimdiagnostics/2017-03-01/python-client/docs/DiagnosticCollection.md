# DiagnosticCollection

Paged Diagnostic list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[DiagnosticContract]**](DiagnosticContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.diagnostic_collection import DiagnosticCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticCollection from a JSON string
diagnostic_collection_instance = DiagnosticCollection.from_json(json)
# print the JSON string representation of the object
print(DiagnosticCollection.to_json())

# convert the object into a dict
diagnostic_collection_dict = diagnostic_collection_instance.to_dict()
# create an instance of DiagnosticCollection from a dict
diagnostic_collection_from_dict = DiagnosticCollection.from_dict(diagnostic_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


