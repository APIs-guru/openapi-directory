# ListContainerItems

Response schema. Contains list of blobs returned, and if paging is requested or required, a URL to next page of containers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Request URL that can be used to query next page of containers. Returned when total number of requested containers exceed maximum page size. | [optional] [readonly] 
**value** | [**List[ListContainerItem]**](ListContainerItem.md) | List of blobs containers returned. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_container_items import ListContainerItems

# TODO update the JSON string below
json = "{}"
# create an instance of ListContainerItems from a JSON string
list_container_items_instance = ListContainerItems.from_json(json)
# print the JSON string representation of the object
print(ListContainerItems.to_json())

# convert the object into a dict
list_container_items_dict = list_container_items_instance.to_dict()
# create an instance of ListContainerItems from a dict
list_container_items_from_dict = ListContainerItems.from_dict(list_container_items_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


