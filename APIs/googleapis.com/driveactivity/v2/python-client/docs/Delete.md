# Delete

An object was deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of delete action taken. | [optional] 

## Example

```python
from openapi_client.models.delete import Delete

# TODO update the JSON string below
json = "{}"
# create an instance of Delete from a JSON string
delete_instance = Delete.from_json(json)
# print the JSON string representation of the object
print(Delete.to_json())

# convert the object into a dict
delete_dict = delete_instance.to_dict()
# create an instance of Delete from a dict
delete_from_dict = Delete.from_dict(delete_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


