# ReportsWidgetItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign** | **str** | widget name | [optional] 
**campaign_id** | **str** | widget id | [optional] 
**clicks** | **str** |  | [optional] 
**cpc** | **str** |  | [optional] 
**ctr** | **str** |  | [optional] 
**earnings** | **str** |  | [optional] 
**impressions** | **str** |  | [optional] 
**net_ecpm** | **str** |  | [optional] 
**rpm** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.reports_widget_item import ReportsWidgetItem

# TODO update the JSON string below
json = "{}"
# create an instance of ReportsWidgetItem from a JSON string
reports_widget_item_instance = ReportsWidgetItem.from_json(json)
# print the JSON string representation of the object
print(ReportsWidgetItem.to_json())

# convert the object into a dict
reports_widget_item_dict = reports_widget_item_instance.to_dict()
# create an instance of ReportsWidgetItem from a dict
reports_widget_item_from_dict = ReportsWidgetItem.from_dict(reports_widget_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


