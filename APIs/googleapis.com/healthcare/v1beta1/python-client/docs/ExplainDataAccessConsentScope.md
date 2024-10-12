# ExplainDataAccessConsentScope

A single consent scope that provides info on who has access to the requested resource scope for a particular purpose and environment, enforced by which consent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessor_scope** | [**ConsentAccessorScope**](ConsentAccessorScope.md) |  | [optional] 
**decision** | **str** | Whether the current consent scope is permitted or denied access on the requested resource. | [optional] 
**enforcing_consents** | [**List[ExplainDataAccessConsentInfo]**](ExplainDataAccessConsentInfo.md) | Metadata of the consent resources that enforce the consent scope&#39;s access. | [optional] 
**exceptions** | [**List[ExplainDataAccessConsentScope]**](ExplainDataAccessConsentScope.md) | Other consent scopes that created exceptions within this scope. | [optional] 

## Example

```python
from openapi_client.models.explain_data_access_consent_scope import ExplainDataAccessConsentScope

# TODO update the JSON string below
json = "{}"
# create an instance of ExplainDataAccessConsentScope from a JSON string
explain_data_access_consent_scope_instance = ExplainDataAccessConsentScope.from_json(json)
# print the JSON string representation of the object
print(ExplainDataAccessConsentScope.to_json())

# convert the object into a dict
explain_data_access_consent_scope_dict = explain_data_access_consent_scope_instance.to_dict()
# create an instance of ExplainDataAccessConsentScope from a dict
explain_data_access_consent_scope_from_dict = ExplainDataAccessConsentScope.from_dict(explain_data_access_consent_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


