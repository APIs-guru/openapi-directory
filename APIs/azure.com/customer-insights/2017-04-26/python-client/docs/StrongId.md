# StrongId

Property/Properties which represent a unique ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **Dict[str, str]** | Localized descriptions. | [optional] 
**display_name** | **Dict[str, str]** | Localized display name. | [optional] 
**key_property_names** | **List[str]** | The properties which make up the unique ID. | 
**strong_id_name** | **str** | The Name identifying the strong ID. | 

## Example

```python
from openapi_client.models.strong_id import StrongId

# TODO update the JSON string below
json = "{}"
# create an instance of StrongId from a JSON string
strong_id_instance = StrongId.from_json(json)
# print the JSON string representation of the object
print(StrongId.to_json())

# convert the object into a dict
strong_id_dict = strong_id_instance.to_dict()
# create an instance of StrongId from a dict
strong_id_from_dict = StrongId.from_dict(strong_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


