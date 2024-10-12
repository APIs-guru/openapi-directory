# ItemStatus

This contains item's status and any errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Status code. | [optional] 
**processing_errors** | [**List[ProcessingError]**](ProcessingError.md) | Error details in case the item is in ERROR state. | [optional] 
**repository_errors** | [**List[RepositoryError]**](RepositoryError.md) | Repository error reported by connector. | [optional] 

## Example

```python
from openapi_client.models.item_status import ItemStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ItemStatus from a JSON string
item_status_instance = ItemStatus.from_json(json)
# print the JSON string representation of the object
print(ItemStatus.to_json())

# convert the object into a dict
item_status_dict = item_status_instance.to_dict()
# create an instance of ItemStatus from a dict
item_status_from_dict = ItemStatus.from_dict(item_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


