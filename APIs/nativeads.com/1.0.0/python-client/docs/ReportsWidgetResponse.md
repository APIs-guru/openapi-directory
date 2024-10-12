# ReportsWidgetResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ReportsWidgetItem]**](ReportsWidgetItem.md) |  | [optional] 
**success** | **bool** |  | [optional] 
**total_count** | **int** |  | [optional] 
**totals** | [**Totals**](Totals.md) |  | [optional] 

## Example

```python
from openapi_client.models.reports_widget_response import ReportsWidgetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReportsWidgetResponse from a JSON string
reports_widget_response_instance = ReportsWidgetResponse.from_json(json)
# print the JSON string representation of the object
print(ReportsWidgetResponse.to_json())

# convert the object into a dict
reports_widget_response_dict = reports_widget_response_instance.to_dict()
# create an instance of ReportsWidgetResponse from a dict
reports_widget_response_from_dict = ReportsWidgetResponse.from_dict(reports_widget_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


