# RichMediaExitOverride

Rich Media Exit Override.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**click_through_url** | [**ClickThroughUrl**](ClickThroughUrl.md) |  | [optional] 
**enabled** | **bool** | Whether to use the clickThroughUrl. If false, the creative-level exit will be used. | [optional] 
**exit_id** | **str** | ID for the override to refer to a specific exit in the creative. | [optional] 

## Example

```python
from openapi_client.models.rich_media_exit_override import RichMediaExitOverride

# TODO update the JSON string below
json = "{}"
# create an instance of RichMediaExitOverride from a JSON string
rich_media_exit_override_instance = RichMediaExitOverride.from_json(json)
# print the JSON string representation of the object
print(RichMediaExitOverride.to_json())

# convert the object into a dict
rich_media_exit_override_dict = rich_media_exit_override_instance.to_dict()
# create an instance of RichMediaExitOverride from a dict
rich_media_exit_override_from_dict = RichMediaExitOverride.from_dict(rich_media_exit_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


