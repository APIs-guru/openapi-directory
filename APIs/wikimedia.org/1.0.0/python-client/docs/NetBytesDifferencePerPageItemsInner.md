# NetBytesDifferencePerPageItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editor_type** | **str** |  | [optional] 
**granularity** | **str** |  | [optional] 
**page_title** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**results** | [**List[NetBytesDifferenceItemsInnerResultsInner]**](NetBytesDifferenceItemsInnerResultsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.net_bytes_difference_per_page_items_inner import NetBytesDifferencePerPageItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of NetBytesDifferencePerPageItemsInner from a JSON string
net_bytes_difference_per_page_items_inner_instance = NetBytesDifferencePerPageItemsInner.from_json(json)
# print the JSON string representation of the object
print(NetBytesDifferencePerPageItemsInner.to_json())

# convert the object into a dict
net_bytes_difference_per_page_items_inner_dict = net_bytes_difference_per_page_items_inner_instance.to_dict()
# create an instance of NetBytesDifferencePerPageItemsInner from a dict
net_bytes_difference_per_page_items_inner_from_dict = NetBytesDifferencePerPageItemsInner.from_dict(net_bytes_difference_per_page_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


