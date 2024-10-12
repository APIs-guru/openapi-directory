# JwtResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **int** | The ID of the Customer | [optional] 
**email** | **str** | The Role of the User | [optional] 
**role** | **str** | The Role of the User | [optional] 
**token** | **str** | The value of token | 
**type** | **str** | The type of token | 
**user_id** | **int** | The ID of the User | [optional] 

## Example

```python
from openapi_client.models.jwt_response import JwtResponse

# TODO update the JSON string below
json = "{}"
# create an instance of JwtResponse from a JSON string
jwt_response_instance = JwtResponse.from_json(json)
# print the JSON string representation of the object
print(JwtResponse.to_json())

# convert the object into a dict
jwt_response_dict = jwt_response_instance.to_dict()
# create an instance of JwtResponse from a dict
jwt_response_from_dict = JwtResponse.from_dict(jwt_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


