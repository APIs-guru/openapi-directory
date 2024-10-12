# GoogleAppsCardV1CardFixedFooter

A persistent (sticky) footer that that appears at the bottom of the card. Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. For Chat apps, you can use fixed footers in [dialogs](https://developers.google.com/chat/how-tos/dialogs), but not [card messages](https://developers.google.com/chat/api/guides/v1/messages/create#create). For an example in Google Chat apps, see [Card footer](https://developers.google.com/chat/ui/widgets/card-fixed-footer). [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_button** | [**GoogleAppsCardV1Button**](GoogleAppsCardV1Button.md) |  | [optional] 
**secondary_button** | [**GoogleAppsCardV1Button**](GoogleAppsCardV1Button.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_card_fixed_footer import GoogleAppsCardV1CardFixedFooter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1CardFixedFooter from a JSON string
google_apps_card_v1_card_fixed_footer_instance = GoogleAppsCardV1CardFixedFooter.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1CardFixedFooter.to_json())

# convert the object into a dict
google_apps_card_v1_card_fixed_footer_dict = google_apps_card_v1_card_fixed_footer_instance.to_dict()
# create an instance of GoogleAppsCardV1CardFixedFooter from a dict
google_apps_card_v1_card_fixed_footer_from_dict = GoogleAppsCardV1CardFixedFooter.from_dict(google_apps_card_v1_card_fixed_footer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


