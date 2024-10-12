# GlobalJwtVerifierSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the cookie | 
**type** | **str** | String with value InCookie | 
**remove** | **str** | Remove regex inside the value, like &#39;Bearer &#39; | 

## Example

```python
from openapi_client.models.global_jwt_verifier_source import GlobalJwtVerifierSource

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalJwtVerifierSource from a JSON string
global_jwt_verifier_source_instance = GlobalJwtVerifierSource.from_json(json)
# print the JSON string representation of the object
print(GlobalJwtVerifierSource.to_json())

# convert the object into a dict
global_jwt_verifier_source_dict = global_jwt_verifier_source_instance.to_dict()
# create an instance of GlobalJwtVerifierSource from a dict
global_jwt_verifier_source_from_dict = GlobalJwtVerifierSource.from_dict(global_jwt_verifier_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


