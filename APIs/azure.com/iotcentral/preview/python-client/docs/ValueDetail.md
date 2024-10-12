# ValueDetail

Visualization details for the referenced capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **object** | JSON-LD context for the entity. | [optional] 
**id** | **str** | Unique ID of the entity. | [optional] 
**type** | **List[str]** | Type of the entity. | 
**comment** | **str** | Developer comment about the entity. | [optional] 
**description** | **str** | Detailed description of the entity. | [optional] 
**display_name** | **str** | Display name of the entity. | [optional] 

## Example

```python
from openapi_client.models.value_detail import ValueDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ValueDetail from a JSON string
value_detail_instance = ValueDetail.from_json(json)
# print the JSON string representation of the object
print(ValueDetail.to_json())

# convert the object into a dict
value_detail_dict = value_detail_instance.to_dict()
# create an instance of ValueDetail from a dict
value_detail_from_dict = ValueDetail.from_dict(value_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


