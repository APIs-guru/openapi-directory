# NetBytesDifferenceItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editor_type** | **str** |  | [optional] 
**granularity** | **str** |  | [optional] 
**page_type** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**results** | [**List[NetBytesDifferenceItemsInnerResultsInner]**](NetBytesDifferenceItemsInnerResultsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.net_bytes_difference_items_inner import NetBytesDifferenceItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of NetBytesDifferenceItemsInner from a JSON string
net_bytes_difference_items_inner_instance = NetBytesDifferenceItemsInner.from_json(json)
# print the JSON string representation of the object
print(NetBytesDifferenceItemsInner.to_json())

# convert the object into a dict
net_bytes_difference_items_inner_dict = net_bytes_difference_items_inner_instance.to_dict()
# create an instance of NetBytesDifferenceItemsInner from a dict
net_bytes_difference_items_inner_from_dict = NetBytesDifferenceItemsInner.from_dict(net_bytes_difference_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


