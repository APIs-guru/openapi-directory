# GoogleAppsCardV1Grid

Displays a grid with a collection of items. Items can only include text or images. For responsive columns, or to include more than text or images, use `Columns`. For an example in Google Chat apps, see [Grid](https://developers.google.com/chat/ui/widgets/grid). A grid supports any number of columns and items. The number of rows is determined by items divided by columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): For example, the following JSON creates a 2 column grid with a single item: ``` \"grid\": { \"title\": \"A fine collection of items\", \"columnCount\": 2, \"borderStyle\": { \"type\": \"STROKE\", \"cornerRadius\": 4 }, \"items\": [ { \"image\": { \"imageUri\": \"https://www.example.com/image.png\", \"cropStyle\": { \"type\": \"SQUARE\" }, \"borderStyle\": { \"type\": \"STROKE\" } }, \"title\": \"An item\", \"textAlignment\": \"CENTER\" } ], \"onClick\": { \"openLink\": { \"url\": \"https://www.example.com\" } } } ```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**border_style** | [**GoogleAppsCardV1BorderStyle**](GoogleAppsCardV1BorderStyle.md) |  | [optional] 
**column_count** | **int** | The number of columns to display in the grid. A default value is used if this field isn&#39;t specified, and that default value is different depending on where the grid is shown (dialog versus companion). | [optional] 
**items** | [**List[GoogleAppsCardV1GridItem]**](GoogleAppsCardV1GridItem.md) | The items to display in the grid. | [optional] 
**on_click** | [**GoogleAppsCardV1OnClick**](GoogleAppsCardV1OnClick.md) |  | [optional] 
**title** | **str** | The text that displays in the grid header. | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_grid import GoogleAppsCardV1Grid

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1Grid from a JSON string
google_apps_card_v1_grid_instance = GoogleAppsCardV1Grid.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1Grid.to_json())

# convert the object into a dict
google_apps_card_v1_grid_dict = google_apps_card_v1_grid_instance.to_dict()
# create an instance of GoogleAppsCardV1Grid from a dict
google_apps_card_v1_grid_from_dict = GoogleAppsCardV1Grid.from_dict(google_apps_card_v1_grid_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


