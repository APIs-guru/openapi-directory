# JWTObtainPairRequest

Obtain JWT pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret_id** | **str** | Secret id from /user-secrets/ | 
**secret_key** | **str** | Secret key from /user-secrets/ | 

## Example

```python
from openapi_client.models.jwt_obtain_pair_request import JWTObtainPairRequest

# TODO update the JSON string below
json = "{}"
# create an instance of JWTObtainPairRequest from a JSON string
jwt_obtain_pair_request_instance = JWTObtainPairRequest.from_json(json)
# print the JSON string representation of the object
print(JWTObtainPairRequest.to_json())

# convert the object into a dict
jwt_obtain_pair_request_dict = jwt_obtain_pair_request_instance.to_dict()
# create an instance of JWTObtainPairRequest from a dict
jwt_obtain_pair_request_from_dict = JWTObtainPairRequest.from_dict(jwt_obtain_pair_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


