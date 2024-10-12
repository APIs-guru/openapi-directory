# PlaceActionTypeMetadata

Metadata for supported place action types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The localized display name for the attribute, if available; otherwise, the English display name. | [optional] 
**place_action_type** | **str** | The place action type. | [optional] 

## Example

```python
from openapi_client.models.place_action_type_metadata import PlaceActionTypeMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of PlaceActionTypeMetadata from a JSON string
place_action_type_metadata_instance = PlaceActionTypeMetadata.from_json(json)
# print the JSON string representation of the object
print(PlaceActionTypeMetadata.to_json())

# convert the object into a dict
place_action_type_metadata_dict = place_action_type_metadata_instance.to_dict()
# create an instance of PlaceActionTypeMetadata from a dict
place_action_type_metadata_from_dict = PlaceActionTypeMetadata.from_dict(place_action_type_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


