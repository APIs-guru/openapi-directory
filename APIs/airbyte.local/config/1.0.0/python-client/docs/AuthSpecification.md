# AuthSpecification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_type** | **str** |  | [optional] 
**oauth2_specification** | [**OAuth2Specification**](OAuth2Specification.md) |  | [optional] 

## Example

```python
from openapi_client.models.auth_specification import AuthSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of AuthSpecification from a JSON string
auth_specification_instance = AuthSpecification.from_json(json)
# print the JSON string representation of the object
print(AuthSpecification.to_json())

# convert the object into a dict
auth_specification_dict = auth_specification_instance.to_dict()
# create an instance of AuthSpecification from a dict
auth_specification_from_dict = AuthSpecification.from_dict(auth_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


