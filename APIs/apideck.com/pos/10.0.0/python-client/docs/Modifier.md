# Modifier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_name** | **str** |  | [optional] 
**available** | **bool** |  | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**idempotency_key** | **str** | A value you specify that uniquely identifies this request among requests you have sent. | [optional] 
**modifier_group_id** | **str** |  | 
**name** | **str** |  | 
**price_amount** | **float** |  | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.modifier import Modifier

# TODO update the JSON string below
json = "{}"
# create an instance of Modifier from a JSON string
modifier_instance = Modifier.from_json(json)
# print the JSON string representation of the object
print(Modifier.to_json())

# convert the object into a dict
modifier_dict = modifier_instance.to_dict()
# create an instance of Modifier from a dict
modifier_from_dict = Modifier.from_dict(modifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


