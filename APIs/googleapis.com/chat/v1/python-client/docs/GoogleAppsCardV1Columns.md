# GoogleAppsCardV1Columns

The `Columns` widget displays up to 2 columns in a card or dialog. You can add widgets to each column; the widgets appear in the order that they are specified. For an example in Google Chat apps, see [Columns](https://developers.google.com/chat/ui/widgets/columns). The height of each column is determined by the taller column. For example, if the first column is taller than the second column, both columns have the height of the first column. Because each column can contain a different number of widgets, you can't define rows or align widgets between the columns. Columns are displayed side-by-side. You can customize the width of each column using the `HorizontalSizeStyle` field. If the user's screen width is too narrow, the second column wraps below the first: * On web, the second column wraps if the screen width is less than or equal to 480 pixels. * On iOS devices, the second column wraps if the screen width is less than or equal to 300 pt. * On Android devices, the second column wraps if the screen width is less than or equal to 320 dp. To include more than 2 columns, or to use rows, use the `Grid` widget. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): Columns for Google Workspace Add-ons are in [Developer Preview](https://developers.google.com/workspace/preview).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_items** | [**List[GoogleAppsCardV1Column]**](GoogleAppsCardV1Column.md) | An array of columns. You can include up to 2 columns in a card or dialog. | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_columns import GoogleAppsCardV1Columns

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1Columns from a JSON string
google_apps_card_v1_columns_instance = GoogleAppsCardV1Columns.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1Columns.to_json())

# convert the object into a dict
google_apps_card_v1_columns_dict = google_apps_card_v1_columns_instance.to_dict()
# create an instance of GoogleAppsCardV1Columns from a dict
google_apps_card_v1_columns_from_dict = GoogleAppsCardV1Columns.from_dict(google_apps_card_v1_columns_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


