# CompanionClickThroughOverride

Companion Click-through override.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**click_through_url** | [**ClickThroughUrl**](ClickThroughUrl.md) |  | [optional] 
**creative_id** | **str** | ID of the creative for this companion click-through override. | [optional] 

## Example

```python
from openapi_client.models.companion_click_through_override import CompanionClickThroughOverride

# TODO update the JSON string below
json = "{}"
# create an instance of CompanionClickThroughOverride from a JSON string
companion_click_through_override_instance = CompanionClickThroughOverride.from_json(json)
# print the JSON string representation of the object
print(CompanionClickThroughOverride.to_json())

# convert the object into a dict
companion_click_through_override_dict = companion_click_through_override_instance.to_dict()
# create an instance of CompanionClickThroughOverride from a dict
companion_click_through_override_from_dict = CompanionClickThroughOverride.from_dict(companion_click_through_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


