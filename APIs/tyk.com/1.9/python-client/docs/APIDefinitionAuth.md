# APIDefinitionAuth


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_header_name** | **str** |  | [optional] 
**use_cookie** | **bool** |  | [optional] 
**use_param** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.api_definition_auth import APIDefinitionAuth

# TODO update the JSON string below
json = "{}"
# create an instance of APIDefinitionAuth from a JSON string
api_definition_auth_instance = APIDefinitionAuth.from_json(json)
# print the JSON string representation of the object
print(APIDefinitionAuth.to_json())

# convert the object into a dict
api_definition_auth_dict = api_definition_auth_instance.to_dict()
# create an instance of APIDefinitionAuth from a dict
api_definition_auth_from_dict = APIDefinitionAuth.from_dict(api_definition_auth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


