# KeyDescription

The description of the EngagementFabric account key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the key | [optional] [readonly] 
**rank** | [**KeyRank**](KeyRank.md) |  | [optional] 
**value** | **str** | The value of the key | [optional] [readonly] 

## Example

```python
from openapi_client.models.key_description import KeyDescription

# TODO update the JSON string below
json = "{}"
# create an instance of KeyDescription from a JSON string
key_description_instance = KeyDescription.from_json(json)
# print the JSON string representation of the object
print(KeyDescription.to_json())

# convert the object into a dict
key_description_dict = key_description_instance.to_dict()
# create an instance of KeyDescription from a dict
key_description_from_dict = KeyDescription.from_dict(key_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


