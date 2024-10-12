# UsageModelDisplay

Localized information describing this usage model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | String to display for this usage model. | [optional] 

## Example

```python
from openapi_client.models.usage_model_display import UsageModelDisplay

# TODO update the JSON string below
json = "{}"
# create an instance of UsageModelDisplay from a JSON string
usage_model_display_instance = UsageModelDisplay.from_json(json)
# print the JSON string representation of the object
print(UsageModelDisplay.to_json())

# convert the object into a dict
usage_model_display_dict = usage_model_display_instance.to_dict()
# create an instance of UsageModelDisplay from a dict
usage_model_display_from_dict = UsageModelDisplay.from_dict(usage_model_display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


