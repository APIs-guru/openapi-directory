# FileShareItem

The file share properties be listed out.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**FileShareProperties**](FileShareProperties.md) |  | [optional] 
**etag** | **str** | Resource Etag. | [optional] [readonly] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.file_share_item import FileShareItem

# TODO update the JSON string below
json = "{}"
# create an instance of FileShareItem from a JSON string
file_share_item_instance = FileShareItem.from_json(json)
# print the JSON string representation of the object
print(FileShareItem.to_json())

# convert the object into a dict
file_share_item_dict = file_share_item_instance.to_dict()
# create an instance of FileShareItem from a dict
file_share_item_from_dict = FileShareItem.from_dict(file_share_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


