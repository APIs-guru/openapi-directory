# AlertDeliveryStatusInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_code** | [**AlertDeliveryStatusCodes**](AlertDeliveryStatusCodes.md) |  | [optional] 
**users** | [**List[UserDeliveryStatusInfo]**](UserDeliveryStatusInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.alert_delivery_status_info import AlertDeliveryStatusInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AlertDeliveryStatusInfo from a JSON string
alert_delivery_status_info_instance = AlertDeliveryStatusInfo.from_json(json)
# print the JSON string representation of the object
print(AlertDeliveryStatusInfo.to_json())

# convert the object into a dict
alert_delivery_status_info_dict = alert_delivery_status_info_instance.to_dict()
# create an instance of AlertDeliveryStatusInfo from a dict
alert_delivery_status_info_from_dict = AlertDeliveryStatusInfo.from_dict(alert_delivery_status_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


