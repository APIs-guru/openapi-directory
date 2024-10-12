# GlobalJwtVerifier

A JWT verifier used by multiple service descriptor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algo_settings** | [**GlobalJwtVerifierAlgoSettings**](GlobalJwtVerifierAlgoSettings.md) |  | 
**desc** | **str** | Verifier description | 
**enabled** | **bool** | Is it enabled | 
**id** | **str** | Verifier id | 
**name** | **str** | Verifier name | 
**source** | [**GlobalJwtVerifierSource**](GlobalJwtVerifierSource.md) |  | 
**strategy** | [**GlobalJwtVerifierStrategy**](GlobalJwtVerifierStrategy.md) |  | 
**strict** | **bool** | Does it fail if JWT not found | 

## Example

```python
from openapi_client.models.global_jwt_verifier import GlobalJwtVerifier

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalJwtVerifier from a JSON string
global_jwt_verifier_instance = GlobalJwtVerifier.from_json(json)
# print the JSON string representation of the object
print(GlobalJwtVerifier.to_json())

# convert the object into a dict
global_jwt_verifier_dict = global_jwt_verifier_instance.to_dict()
# create an instance of GlobalJwtVerifier from a dict
global_jwt_verifier_from_dict = GlobalJwtVerifier.from_dict(global_jwt_verifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


