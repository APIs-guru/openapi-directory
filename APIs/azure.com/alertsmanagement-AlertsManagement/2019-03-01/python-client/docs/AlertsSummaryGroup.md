# AlertsSummaryGroup

Group the result set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groupedby** | **str** | Name of the field aggregated | [optional] 
**smart_groups_count** | **int** | Total count of the smart groups. | [optional] 
**total** | **int** | Total count of the result set. | [optional] 
**values** | [**List[AlertsSummaryGroupItem]**](AlertsSummaryGroupItem.md) | List of the items | [optional] 

## Example

```python
from openapi_client.models.alerts_summary_group import AlertsSummaryGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AlertsSummaryGroup from a JSON string
alerts_summary_group_instance = AlertsSummaryGroup.from_json(json)
# print the JSON string representation of the object
print(AlertsSummaryGroup.to_json())

# convert the object into a dict
alerts_summary_group_dict = alerts_summary_group_instance.to_dict()
# create an instance of AlertsSummaryGroup from a dict
alerts_summary_group_from_dict = AlertsSummaryGroup.from_dict(alerts_summary_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


