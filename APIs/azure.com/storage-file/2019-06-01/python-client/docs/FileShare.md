# FileShare

Properties of the file share, including Id, resource name, resource type, Etag.

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
from openapi_client.models.file_share import FileShare

# TODO update the JSON string below
json = "{}"
# create an instance of FileShare from a JSON string
file_share_instance = FileShare.from_json(json)
# print the JSON string representation of the object
print(FileShare.to_json())

# convert the object into a dict
file_share_dict = file_share_instance.to_dict()
# create an instance of FileShare from a dict
file_share_from_dict = FileShare.from_dict(file_share_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


