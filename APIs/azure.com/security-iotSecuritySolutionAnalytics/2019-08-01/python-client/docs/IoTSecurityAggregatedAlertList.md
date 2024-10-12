# IoTSecurityAggregatedAlertList

List of IoT Security solution aggregated alert data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | When there is too much alert data for one page, use this URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[IoTSecurityAggregatedAlert]**](IoTSecurityAggregatedAlert.md) | List of aggregated alerts data. | 

## Example

```python
from openapi_client.models.io_t_security_aggregated_alert_list import IoTSecurityAggregatedAlertList

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecurityAggregatedAlertList from a JSON string
io_t_security_aggregated_alert_list_instance = IoTSecurityAggregatedAlertList.from_json(json)
# print the JSON string representation of the object
print(IoTSecurityAggregatedAlertList.to_json())

# convert the object into a dict
io_t_security_aggregated_alert_list_dict = io_t_security_aggregated_alert_list_instance.to_dict()
# create an instance of IoTSecurityAggregatedAlertList from a dict
io_t_security_aggregated_alert_list_from_dict = IoTSecurityAggregatedAlertList.from_dict(io_t_security_aggregated_alert_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


