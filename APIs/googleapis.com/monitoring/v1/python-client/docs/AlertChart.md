# AlertChart

A chart that displays alert policy data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The resource name of the alert policy. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID]  | [optional] 

## Example

```python
from openapi_client.models.alert_chart import AlertChart

# TODO update the JSON string below
json = "{}"
# create an instance of AlertChart from a JSON string
alert_chart_instance = AlertChart.from_json(json)
# print the JSON string representation of the object
print(AlertChart.to_json())

# convert the object into a dict
alert_chart_dict = alert_chart_instance.to_dict()
# create an instance of AlertChart from a dict
alert_chart_from_dict = AlertChart.from_dict(alert_chart_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


