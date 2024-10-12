# ExplainDataAccessResponse

List of consent scopes that are applicable to the explained access on a given resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_scopes** | [**List[ExplainDataAccessConsentScope]**](ExplainDataAccessConsentScope.md) | List of applicable consent scopes. Sorted in order of actor such that scopes belonging to the same actor will be adjacent to each other in the list. | [optional] 
**warning** | **str** | Warnings associated with this response. It inform user with exceeded scope limit errors. | [optional] 

## Example

```python
from openapi_client.models.explain_data_access_response import ExplainDataAccessResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExplainDataAccessResponse from a JSON string
explain_data_access_response_instance = ExplainDataAccessResponse.from_json(json)
# print the JSON string representation of the object
print(ExplainDataAccessResponse.to_json())

# convert the object into a dict
explain_data_access_response_dict = explain_data_access_response_instance.to_dict()
# create an instance of ExplainDataAccessResponse from a dict
explain_data_access_response_from_dict = ExplainDataAccessResponse.from_dict(explain_data_access_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


