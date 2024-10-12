# AlertsSummaryGroupItem

Alerts summary group item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Count of the aggregated field | [optional] 
**groupedby** | **str** | Name of the field aggregated | [optional] 
**name** | **str** | Value of the aggregated field | [optional] 
**values** | [**List[AlertsSummaryGroupItem]**](AlertsSummaryGroupItem.md) | List of the items | [optional] 

## Example

```python
from openapi_client.models.alerts_summary_group_item import AlertsSummaryGroupItem

# TODO update the JSON string below
json = "{}"
# create an instance of AlertsSummaryGroupItem from a JSON string
alerts_summary_group_item_instance = AlertsSummaryGroupItem.from_json(json)
# print the JSON string representation of the object
print(AlertsSummaryGroupItem.to_json())

# convert the object into a dict
alerts_summary_group_item_dict = alerts_summary_group_item_instance.to_dict()
# create an instance of AlertsSummaryGroupItem from a dict
alerts_summary_group_item_from_dict = AlertsSummaryGroupItem.from_dict(alerts_summary_group_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


