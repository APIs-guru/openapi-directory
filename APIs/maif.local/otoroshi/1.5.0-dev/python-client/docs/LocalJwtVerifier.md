# LocalJwtVerifier

A JWT verifier used only for the current service descriptor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algo_settings** | [**GlobalJwtVerifierAlgoSettings**](GlobalJwtVerifierAlgoSettings.md) |  | 
**enabled** | **bool** | Is it enabled | 
**source** | [**GlobalJwtVerifierSource**](GlobalJwtVerifierSource.md) |  | 
**strategy** | [**GlobalJwtVerifierStrategy**](GlobalJwtVerifierStrategy.md) |  | 
**strict** | **bool** | Does it fail if JWT not found | 
**type** | **str** | A string with value &#39;local&#39; | 

## Example

```python
from openapi_client.models.local_jwt_verifier import LocalJwtVerifier

# TODO update the JSON string below
json = "{}"
# create an instance of LocalJwtVerifier from a JSON string
local_jwt_verifier_instance = LocalJwtVerifier.from_json(json)
# print the JSON string representation of the object
print(LocalJwtVerifier.to_json())

# convert the object into a dict
local_jwt_verifier_dict = local_jwt_verifier_instance.to_dict()
# create an instance of LocalJwtVerifier from a dict
local_jwt_verifier_from_dict = LocalJwtVerifier.from_dict(local_jwt_verifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


