# WritableContact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**email** | **str** |  | [optional] 
**group** | **int** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**link** | **str** |  | [optional] 
**name** | **str** |  | 
**phone** | **str** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**title** | **str** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_contact import WritableContact

# TODO update the JSON string below
json = "{}"
# create an instance of WritableContact from a JSON string
writable_contact_instance = WritableContact.from_json(json)
# print the JSON string representation of the object
print(WritableContact.to_json())

# convert the object into a dict
writable_contact_dict = writable_contact_instance.to_dict()
# create an instance of WritableContact from a dict
writable_contact_from_dict = WritableContact.from_dict(writable_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


