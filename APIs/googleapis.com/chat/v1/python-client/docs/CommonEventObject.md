# CommonEventObject

Represents information about the user's client, such as locale, host app, and platform. For Chat apps, `CommonEventObject` includes data submitted by users interacting with cards, like data entered in [dialogs](https://developers.google.com/chat/how-tos/dialogs).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form_inputs** | [**Dict[str, Inputs]**](Inputs.md) | A map containing the values that a user inputs in a widget from a card or dialog. The map keys are the string IDs assigned to each widget, and the values represent inputs to the widget. For details, see [Process information inputted by users](https://developers.google.com/chat/ui/read-form-data). | [optional] 
**host_app** | **str** | The hostApp enum which indicates the app the add-on is invoked from. Always &#x60;CHAT&#x60; for Chat apps. | [optional] 
**invoked_function** | **str** | Name of the invoked function associated with the widget. Only set for Chat apps. | [optional] 
**parameters** | **Dict[str, str]** | Custom [parameters](/chat/api/reference/rest/v1/cards#ActionParameter) passed to the invoked function. Both keys and values must be strings. | [optional] 
**platform** | **str** | The platform enum which indicates the platform where the event originates (&#x60;WEB&#x60;, &#x60;IOS&#x60;, or &#x60;ANDROID&#x60;). Not supported by Chat apps. | [optional] 
**time_zone** | [**TimeZone**](TimeZone.md) |  | [optional] 
**user_locale** | **str** | The full &#x60;locale.displayName&#x60; in the format of [ISO 639 language code]-[ISO 3166 country/region code] such as \&quot;en-US\&quot;. | [optional] 

## Example

```python
from openapi_client.models.common_event_object import CommonEventObject

# TODO update the JSON string below
json = "{}"
# create an instance of CommonEventObject from a JSON string
common_event_object_instance = CommonEventObject.from_json(json)
# print the JSON string representation of the object
print(CommonEventObject.to_json())

# convert the object into a dict
common_event_object_dict = common_event_object_instance.to_dict()
# create an instance of CommonEventObject from a dict
common_event_object_from_dict = CommonEventObject.from_dict(common_event_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


