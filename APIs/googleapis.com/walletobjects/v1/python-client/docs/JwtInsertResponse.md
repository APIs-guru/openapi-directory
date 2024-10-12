# JwtInsertResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resources** | [**Resources**](Resources.md) |  | [optional] 
**save_uri** | **str** | A URI that, when opened, will allow the end user to save the object(s) identified in the JWT to their Google account. | [optional] 

## Example

```python
from openapi_client.models.jwt_insert_response import JwtInsertResponse

# TODO update the JSON string below
json = "{}"
# create an instance of JwtInsertResponse from a JSON string
jwt_insert_response_instance = JwtInsertResponse.from_json(json)
# print the JSON string representation of the object
print(JwtInsertResponse.to_json())

# convert the object into a dict
jwt_insert_response_dict = jwt_insert_response_instance.to_dict()
# create an instance of JwtInsertResponse from a dict
jwt_insert_response_from_dict = JwtInsertResponse.from_dict(jwt_insert_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


