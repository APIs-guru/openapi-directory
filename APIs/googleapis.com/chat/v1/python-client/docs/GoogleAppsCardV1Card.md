# GoogleAppsCardV1Card

A card interface displayed in a Google Chat message or Google Workspace Add-on. Cards support a defined layout, interactive UI elements like buttons, and rich media like images. Use cards to present detailed information, gather information from users, and guide users to take a next step. [Card builder](https://addons.gsuite.google.com/uikit/builder) To learn how to build cards, see the following documentation: * For Google Chat apps, see [Design dynamic, interactive, and consistent UIs with cards](https://developers.google.com/chat/ui). * For Google Workspace Add-ons, see [Card-based interfaces](https://developers.google.com/apps-script/add-ons/concepts/cards). **Example: Card message for a Google Chat app** ![Example contact card](https://developers.google.com/chat/images/card_api_reference.png) To create the sample card message in Google Chat, use the following JSON: ``` { \"cardsV2\": [ { \"cardId\": \"unique-card-id\", \"card\": { \"header\": { \"title\": \"Sasha\", \"subtitle\": \"Software Engineer\", \"imageUrl\": \"https://developers.google.com/chat/images/quickstart-app-avatar.png\", \"imageType\": \"CIRCLE\", \"imageAltText\": \"Avatar for Sasha\", }, \"sections\": [ { \"header\": \"Contact Info\", \"collapsible\": true, \"uncollapsibleWidgetsCount\": 1, \"widgets\": [ { \"decoratedText\": { \"startIcon\": { \"knownIcon\": \"EMAIL\", }, \"text\": \"sasha@example.com\", } }, { \"decoratedText\": { \"startIcon\": { \"knownIcon\": \"PERSON\", }, \"text\": \"Online\", }, }, { \"decoratedText\": { \"startIcon\": { \"knownIcon\": \"PHONE\", }, \"text\": \"+1 (555) 555-1234\", } }, { \"buttonList\": { \"buttons\": [ { \"text\": \"Share\", \"onClick\": { \"openLink\": { \"url\": \"https://example.com/share\", } } }, { \"text\": \"Edit\", \"onClick\": { \"action\": { \"function\": \"goToView\", \"parameters\": [ { \"key\": \"viewType\", \"value\": \"EDIT\", } ], } } }, ], } }, ], }, ], }, } ], } ```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_actions** | [**List[GoogleAppsCardV1CardAction]**](GoogleAppsCardV1CardAction.md) | The card&#39;s actions. Actions are added to the card&#39;s toolbar menu. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons): For example, the following JSON constructs a card action menu with &#x60;Settings&#x60; and &#x60;Send Feedback&#x60; options: &#x60;&#x60;&#x60; \&quot;card_actions\&quot;: [ { \&quot;actionLabel\&quot;: \&quot;Settings\&quot;, \&quot;onClick\&quot;: { \&quot;action\&quot;: { \&quot;functionName\&quot;: \&quot;goToView\&quot;, \&quot;parameters\&quot;: [ { \&quot;key\&quot;: \&quot;viewType\&quot;, \&quot;value\&quot;: \&quot;SETTING\&quot; } ], \&quot;loadIndicator\&quot;: \&quot;LoadIndicator.SPINNER\&quot; } } }, { \&quot;actionLabel\&quot;: \&quot;Send Feedback\&quot;, \&quot;onClick\&quot;: { \&quot;openLink\&quot;: { \&quot;url\&quot;: \&quot;https://example.com/feedback\&quot; } } } ] &#x60;&#x60;&#x60; | [optional] 
**display_style** | **str** | In Google Workspace Add-ons, sets the display properties of the &#x60;peekCardHeader&#x60;. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons): | [optional] 
**fixed_footer** | [**GoogleAppsCardV1CardFixedFooter**](GoogleAppsCardV1CardFixedFooter.md) |  | [optional] 
**header** | [**GoogleAppsCardV1CardHeader**](GoogleAppsCardV1CardHeader.md) |  | [optional] 
**name** | **str** | Name of the card. Used as a card identifier in card navigation. [Google Workspace Add-ons](https://developers.google.com/workspace/add-ons): | [optional] 
**peek_card_header** | [**GoogleAppsCardV1CardHeader**](GoogleAppsCardV1CardHeader.md) |  | [optional] 
**section_divider_style** | **str** | The divider style between sections. | [optional] 
**sections** | [**List[GoogleAppsCardV1Section]**](GoogleAppsCardV1Section.md) | Contains a collection of widgets. Each section has its own, optional header. Sections are visually separated by a line divider. For an example in Google Chat apps, see [Card section](https://developers.google.com/chat/ui/widgets/card-section). | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_card import GoogleAppsCardV1Card

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1Card from a JSON string
google_apps_card_v1_card_instance = GoogleAppsCardV1Card.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1Card.to_json())

# convert the object into a dict
google_apps_card_v1_card_dict = google_apps_card_v1_card_instance.to_dict()
# create an instance of GoogleAppsCardV1Card from a dict
google_apps_card_v1_card_from_dict = GoogleAppsCardV1Card.from_dict(google_apps_card_v1_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


