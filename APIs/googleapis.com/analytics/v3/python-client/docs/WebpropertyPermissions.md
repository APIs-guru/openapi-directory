# WebpropertyPermissions

Permissions the user has for this web property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective** | **List[str]** | All the permissions that the user has for this web property. These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.webproperty_permissions import WebpropertyPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of WebpropertyPermissions from a JSON string
webproperty_permissions_instance = WebpropertyPermissions.from_json(json)
# print the JSON string representation of the object
print(WebpropertyPermissions.to_json())

# convert the object into a dict
webproperty_permissions_dict = webproperty_permissions_instance.to_dict()
# create an instance of WebpropertyPermissions from a dict
webproperty_permissions_from_dict = WebpropertyPermissions.from_dict(webproperty_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


