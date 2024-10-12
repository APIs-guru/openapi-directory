# FloodlightActivityDynamicTag

Dynamic Tag

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of this dynamic tag. This is a read-only, auto-generated field. | [optional] 
**name** | **str** | Name of this tag. | [optional] 
**tag** | **str** | Tag code. | [optional] 

## Example

```python
from openapi_client.models.floodlight_activity_dynamic_tag import FloodlightActivityDynamicTag

# TODO update the JSON string below
json = "{}"
# create an instance of FloodlightActivityDynamicTag from a JSON string
floodlight_activity_dynamic_tag_instance = FloodlightActivityDynamicTag.from_json(json)
# print the JSON string representation of the object
print(FloodlightActivityDynamicTag.to_json())

# convert the object into a dict
floodlight_activity_dynamic_tag_dict = floodlight_activity_dynamic_tag_instance.to_dict()
# create an instance of FloodlightActivityDynamicTag from a dict
floodlight_activity_dynamic_tag_from_dict = FloodlightActivityDynamicTag.from_dict(floodlight_activity_dynamic_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


