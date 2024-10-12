# AlertFilter

The OData filters to be used for Alert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appeared_on_time** | **datetime** | Specifies the appeared time (in UTC) of the alerts to be filtered. Only &#39;Greater-Than&#39; and &#39;Lesser-Than&#39; operators are supported for this property. | [optional] 
**severity** | **str** | Specifies the severity of the alerts to be filtered. Only &#39;Equality&#39; operator is supported for this property. | [optional] 
**source_name** | **str** | Specifies the source name of the alerts to be filtered. Only &#39;Equality&#39; operator is supported for this property. | [optional] 
**source_type** | **str** | Specifies the source type of the alerts to be filtered. Only &#39;Equality&#39; operator is supported for this property. | [optional] 
**status** | **str** | Specifies the status of the alerts to be filtered. Only &#39;Equality&#39; operator is supported for this property. | [optional] 

## Example

```python
from openapi_client.models.alert_filter import AlertFilter

# TODO update the JSON string below
json = "{}"
# create an instance of AlertFilter from a JSON string
alert_filter_instance = AlertFilter.from_json(json)
# print the JSON string representation of the object
print(AlertFilter.to_json())

# convert the object into a dict
alert_filter_dict = alert_filter_instance.to_dict()
# create an instance of AlertFilter from a dict
alert_filter_from_dict = AlertFilter.from_dict(alert_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


