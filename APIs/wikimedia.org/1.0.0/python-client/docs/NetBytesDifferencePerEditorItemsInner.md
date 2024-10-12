# NetBytesDifferencePerEditorItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**granularity** | **str** |  | [optional] 
**page_type** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**results** | [**List[NetBytesDifferenceItemsInnerResultsInner]**](NetBytesDifferenceItemsInnerResultsInner.md) |  | [optional] 
**user_text** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.net_bytes_difference_per_editor_items_inner import NetBytesDifferencePerEditorItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of NetBytesDifferencePerEditorItemsInner from a JSON string
net_bytes_difference_per_editor_items_inner_instance = NetBytesDifferencePerEditorItemsInner.from_json(json)
# print the JSON string representation of the object
print(NetBytesDifferencePerEditorItemsInner.to_json())

# convert the object into a dict
net_bytes_difference_per_editor_items_inner_dict = net_bytes_difference_per_editor_items_inner_instance.to_dict()
# create an instance of NetBytesDifferencePerEditorItemsInner from a dict
net_bytes_difference_per_editor_items_inner_from_dict = NetBytesDifferencePerEditorItemsInner.from_dict(net_bytes_difference_per_editor_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


