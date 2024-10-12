# AssociatedItemBean

Details of an item associated with the changed record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the associated record. | [optional] [readonly] 
**name** | **str** | The name of the associated record. | [optional] [readonly] 
**parent_id** | **str** | The ID of the associated parent record. | [optional] [readonly] 
**parent_name** | **str** | The name of the associated parent record. | [optional] [readonly] 
**type_name** | **str** | The type of the associated record. | [optional] [readonly] 

## Example

```python
from openapi_client.models.associated_item_bean import AssociatedItemBean

# TODO update the JSON string below
json = "{}"
# create an instance of AssociatedItemBean from a JSON string
associated_item_bean_instance = AssociatedItemBean.from_json(json)
# print the JSON string representation of the object
print(AssociatedItemBean.to_json())

# convert the object into a dict
associated_item_bean_dict = associated_item_bean_instance.to_dict()
# create an instance of AssociatedItemBean from a dict
associated_item_bean_from_dict = AssociatedItemBean.from_dict(associated_item_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


