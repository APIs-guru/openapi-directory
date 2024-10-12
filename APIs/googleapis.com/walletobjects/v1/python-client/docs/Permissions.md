# Permissions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issuer_id** | **str** | ID of the issuer the list of permissions refer to. | [optional] 
**permissions** | [**List[Permission]**](Permission.md) | The complete list of permissions for the issuer account. | [optional] 

## Example

```python
from openapi_client.models.permissions import Permissions

# TODO update the JSON string below
json = "{}"
# create an instance of Permissions from a JSON string
permissions_instance = Permissions.from_json(json)
# print the JSON string representation of the object
print(Permissions.to_json())

# convert the object into a dict
permissions_dict = permissions_instance.to_dict()
# create an instance of Permissions from a dict
permissions_from_dict = Permissions.from_dict(permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


