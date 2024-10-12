# LinkedFolder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A unique identifier for an object. | [readonly] 
**name** | **str** | The name of the folder | [optional] 

## Example

```python
from openapi_client.models.linked_folder import LinkedFolder

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedFolder from a JSON string
linked_folder_instance = LinkedFolder.from_json(json)
# print the JSON string representation of the object
print(LinkedFolder.to_json())

# convert the object into a dict
linked_folder_dict = linked_folder_instance.to_dict()
# create an instance of LinkedFolder from a dict
linked_folder_from_dict = LinkedFolder.from_dict(linked_folder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


