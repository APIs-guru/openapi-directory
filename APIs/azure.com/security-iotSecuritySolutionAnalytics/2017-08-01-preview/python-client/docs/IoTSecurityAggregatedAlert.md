# IoTSecurityAggregatedAlert

Security Solution Aggregated Alert information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IoTSecurityAggregatedAlertProperties**](IoTSecurityAggregatedAlertProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.io_t_security_aggregated_alert import IoTSecurityAggregatedAlert

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSecurityAggregatedAlert from a JSON string
io_t_security_aggregated_alert_instance = IoTSecurityAggregatedAlert.from_json(json)
# print the JSON string representation of the object
print(IoTSecurityAggregatedAlert.to_json())

# convert the object into a dict
io_t_security_aggregated_alert_dict = io_t_security_aggregated_alert_instance.to_dict()
# create an instance of IoTSecurityAggregatedAlert from a dict
io_t_security_aggregated_alert_from_dict = IoTSecurityAggregatedAlert.from_dict(io_t_security_aggregated_alert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


