# RefJwtVerifier

Reference to a global JWT verifier

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Is it enabled | 
**id** | **str** | The id of the GlobalJWTVerifier | 
**type** | **str** | A string with value &#39;ref&#39; | 

## Example

```python
from openapi_client.models.ref_jwt_verifier import RefJwtVerifier

# TODO update the JSON string below
json = "{}"
# create an instance of RefJwtVerifier from a JSON string
ref_jwt_verifier_instance = RefJwtVerifier.from_json(json)
# print the JSON string representation of the object
print(RefJwtVerifier.to_json())

# convert the object into a dict
ref_jwt_verifier_dict = ref_jwt_verifier_instance.to_dict()
# create an instance of RefJwtVerifier from a dict
ref_jwt_verifier_from_dict = RefJwtVerifier.from_dict(ref_jwt_verifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


