# EntityFlagObject

Similar to a KVP, the flag has a key (the flag you're indicating) and an integer value.  Values are tied to the specific flag (see table below). Generally they're true (1)/false(0) indicators.      | flag | values | Description |     | ------- | -------- | -------- |     | ongoing_pep | 0, 1, 2 | 0 = no, 1 = pep/sanctions, 2 = 1+media |     |  |  |  | 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flag** | **str** | Name of the flag | [optional] 
**value** | **int** | flag value. | [optional] 

## Example

```python
from openapi_client.models.entity_flag_object import EntityFlagObject

# TODO update the JSON string below
json = "{}"
# create an instance of EntityFlagObject from a JSON string
entity_flag_object_instance = EntityFlagObject.from_json(json)
# print the JSON string representation of the object
print(EntityFlagObject.to_json())

# convert the object into a dict
entity_flag_object_dict = entity_flag_object_instance.to_dict()
# create an instance of EntityFlagObject from a dict
entity_flag_object_from_dict = EntityFlagObject.from_dict(entity_flag_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


