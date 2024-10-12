# ListManagementImageListsCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the list. | [optional] 
**metadata** | **Dict[str, str]** | Metadata of the list. | [optional] 
**name** | **str** | Name of the list. | [optional] 

## Example

```python
from openapi_client.models.list_management_image_lists_create_request import ListManagementImageListsCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListManagementImageListsCreateRequest from a JSON string
list_management_image_lists_create_request_instance = ListManagementImageListsCreateRequest.from_json(json)
# print the JSON string representation of the object
print(ListManagementImageListsCreateRequest.to_json())

# convert the object into a dict
list_management_image_lists_create_request_dict = list_management_image_lists_create_request_instance.to_dict()
# create an instance of ListManagementImageListsCreateRequest from a dict
list_management_image_lists_create_request_from_dict = ListManagementImageListsCreateRequest.from_dict(list_management_image_lists_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


