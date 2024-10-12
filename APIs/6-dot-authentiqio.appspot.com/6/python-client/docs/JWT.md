# JWT


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**since** | **datetime** |  | [optional] 
**status** | **str** |  | [optional] 
**sub** | **str** | base64safe encoded public signing key | [optional] 

## Example

```python
from openapi_client.models.jwt import JWT

# TODO update the JSON string below
json = "{}"
# create an instance of JWT from a JSON string
jwt_instance = JWT.from_json(json)
# print the JSON string representation of the object
print(JWT.to_json())

# convert the object into a dict
jwt_dict = jwt_instance.to_dict()
# create an instance of JWT from a dict
jwt_from_dict = JWT.from_dict(jwt_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


