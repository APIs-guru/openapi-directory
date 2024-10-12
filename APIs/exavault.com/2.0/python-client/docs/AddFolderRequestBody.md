# AddFolderRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the folder to create. Required if **path** is not used | [optional] 
**parent_resource** | **str** | Resource identifier where to create a folder. Required if **path** is not used | [optional] 
**path** | **str** | Fully-qualified path to the new folder including folder&#39;s name | [optional] 

## Example

```python
from openapi_client.models.add_folder_request_body import AddFolderRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of AddFolderRequestBody from a JSON string
add_folder_request_body_instance = AddFolderRequestBody.from_json(json)
# print the JSON string representation of the object
print(AddFolderRequestBody.to_json())

# convert the object into a dict
add_folder_request_body_dict = add_folder_request_body_instance.to_dict()
# create an instance of AddFolderRequestBody from a dict
add_folder_request_body_from_dict = AddFolderRequestBody.from_dict(add_folder_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


