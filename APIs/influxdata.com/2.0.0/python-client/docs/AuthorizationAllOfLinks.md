# AuthorizationAllOfLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_self** | **str** | URI of resource. | [optional] [readonly] 
**user** | **str** | URI of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.authorization_all_of_links import AuthorizationAllOfLinks

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationAllOfLinks from a JSON string
authorization_all_of_links_instance = AuthorizationAllOfLinks.from_json(json)
# print the JSON string representation of the object
print(AuthorizationAllOfLinks.to_json())

# convert the object into a dict
authorization_all_of_links_dict = authorization_all_of_links_instance.to_dict()
# create an instance of AuthorizationAllOfLinks from a dict
authorization_all_of_links_from_dict = AuthorizationAllOfLinks.from_dict(authorization_all_of_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


