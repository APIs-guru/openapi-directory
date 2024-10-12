# FreeBusyRequestItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of a calendar or a group. | [optional] 

## Example

```python
from openapi_client.models.free_busy_request_item import FreeBusyRequestItem

# TODO update the JSON string below
json = "{}"
# create an instance of FreeBusyRequestItem from a JSON string
free_busy_request_item_instance = FreeBusyRequestItem.from_json(json)
# print the JSON string representation of the object
print(FreeBusyRequestItem.to_json())

# convert the object into a dict
free_busy_request_item_dict = free_busy_request_item_instance.to_dict()
# create an instance of FreeBusyRequestItem from a dict
free_busy_request_item_from_dict = FreeBusyRequestItem.from_dict(free_busy_request_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


