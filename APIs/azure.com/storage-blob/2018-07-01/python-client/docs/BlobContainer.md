# BlobContainer

Properties of the blob container, including Id, resource name, resource type, Etag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ContainerProperties**](ContainerProperties.md) |  | [optional] 
**etag** | **str** | Resource Etag. | [optional] [readonly] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.blob_container import BlobContainer

# TODO update the JSON string below
json = "{}"
# create an instance of BlobContainer from a JSON string
blob_container_instance = BlobContainer.from_json(json)
# print the JSON string representation of the object
print(BlobContainer.to_json())

# convert the object into a dict
blob_container_dict = blob_container_instance.to_dict()
# create an instance of BlobContainer from a dict
blob_container_from_dict = BlobContainer.from_dict(blob_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


