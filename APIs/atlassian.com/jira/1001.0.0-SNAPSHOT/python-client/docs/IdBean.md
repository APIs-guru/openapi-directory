# IdBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the permission scheme to associate with the project. Use the [Get all permission schemes](#api-rest-api-3-permissionscheme-get) resource to get a list of permission scheme IDs. | 

## Example

```python
from openapi_client.models.id_bean import IdBean

# TODO update the JSON string below
json = "{}"
# create an instance of IdBean from a JSON string
id_bean_instance = IdBean.from_json(json)
# print the JSON string representation of the object
print(IdBean.to_json())

# convert the object into a dict
id_bean_dict = id_bean_instance.to_dict()
# create an instance of IdBean from a dict
id_bean_from_dict = IdBean.from_dict(id_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


