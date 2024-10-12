# DashboardPartsPosition

The dashboard's part position.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**col_span** | **float** | The dashboard&#39;s part column span. | 
**metadata** | **Dict[str, object]** | The dashboard part&#39;s metadata. | [optional] 
**row_span** | **float** | The dashboard&#39;s part row span. | 
**x** | **float** | The dashboard&#39;s part x coordinate. | 
**y** | **float** | The dashboard&#39;s part y coordinate. | 

## Example

```python
from openapi_client.models.dashboard_parts_position import DashboardPartsPosition

# TODO update the JSON string below
json = "{}"
# create an instance of DashboardPartsPosition from a JSON string
dashboard_parts_position_instance = DashboardPartsPosition.from_json(json)
# print the JSON string representation of the object
print(DashboardPartsPosition.to_json())

# convert the object into a dict
dashboard_parts_position_dict = dashboard_parts_position_instance.to_dict()
# create an instance of DashboardPartsPosition from a dict
dashboard_parts_position_from_dict = DashboardPartsPosition.from_dict(dashboard_parts_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


