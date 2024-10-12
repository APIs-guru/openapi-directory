# Display

Contains the localized display information for this particular operation / action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views. | [optional] 
**operation** | **str** | The localized, friendly name for the operation. Use the name as it will be displayed to the user. | [optional] 
**provider** | **str** | The localized, friendly version of the resource provider name. The provider name is expected to include the name of the publisher or company responsible. The provider name format should use title case and begin with \&quot;Microsoft\&quot; for first-party services. For example, the provider name may be\&quot;Microsoft Monitoring Insights\&quot; or \&quot;Microsoft Compute\&quot;. | [optional] 
**resource** | **str** | The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider. | [optional] 

## Example

```python
from openapi_client.models.display import Display

# TODO update the JSON string below
json = "{}"
# create an instance of Display from a JSON string
display_instance = Display.from_json(json)
# print the JSON string representation of the object
print(Display.to_json())

# convert the object into a dict
display_dict = display_instance.to_dict()
# create an instance of Display from a dict
display_from_dict = Display.from_dict(display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


