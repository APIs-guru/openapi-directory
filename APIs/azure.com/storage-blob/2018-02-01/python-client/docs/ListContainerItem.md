# ListContainerItem

The blob container properties be listed out.

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
from openapi_client.models.list_container_item import ListContainerItem

# TODO update the JSON string below
json = "{}"
# create an instance of ListContainerItem from a JSON string
list_container_item_instance = ListContainerItem.from_json(json)
# print the JSON string representation of the object
print(ListContainerItem.to_json())

# convert the object into a dict
list_container_item_dict = list_container_item_instance.to_dict()
# create an instance of ListContainerItem from a dict
list_container_item_from_dict = ListContainerItem.from_dict(list_container_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


