# Roles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**items** | [**List[Role]**](Role.md) | A list of Role resources. | [optional] 
**kind** | **str** | The type of the API resource. This is always &#x60;admin#directory#roles&#x60;. | [optional] [default to 'admin#directory#roles']
**next_page_token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.roles import Roles

# TODO update the JSON string below
json = "{}"
# create an instance of Roles from a JSON string
roles_instance = Roles.from_json(json)
# print the JSON string representation of the object
print(Roles.to_json())

# convert the object into a dict
roles_dict = roles_instance.to_dict()
# create an instance of Roles from a dict
roles_from_dict = Roles.from_dict(roles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


