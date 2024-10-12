# Claims

Claim in JWT format, self- or issuer-signed.  

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 
**scope** | **str** | claim scope | 
**sub** | **str** | UUID | 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.claims import Claims

# TODO update the JSON string below
json = "{}"
# create an instance of Claims from a JSON string
claims_instance = Claims.from_json(json)
# print the JSON string representation of the object
print(Claims.to_json())

# convert the object into a dict
claims_dict = claims_instance.to_dict()
# create an instance of Claims from a dict
claims_from_dict = Claims.from_dict(claims_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


