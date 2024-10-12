# PhotoPermissions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permaddmeta** | **str** |  | [optional] 
**permcomment** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.photo_permissions import PhotoPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of PhotoPermissions from a JSON string
photo_permissions_instance = PhotoPermissions.from_json(json)
# print the JSON string representation of the object
print(PhotoPermissions.to_json())

# convert the object into a dict
photo_permissions_dict = photo_permissions_instance.to_dict()
# create an instance of PhotoPermissions from a dict
photo_permissions_from_dict = PhotoPermissions.from_dict(photo_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


