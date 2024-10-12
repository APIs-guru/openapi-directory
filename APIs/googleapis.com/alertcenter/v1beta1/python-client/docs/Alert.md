# Alert

An alert affecting a customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_id** | **str** | Output only. The unique identifier for the alert. | [optional] 
**create_time** | **str** | Output only. The time this alert was created. | [optional] 
**customer_id** | **str** | Output only. The unique identifier of the Google Workspace account of the customer. | [optional] 
**data** | **Dict[str, object]** | Optional. The data associated with this alert, for example google.apps.alertcenter.type.DeviceCompromised. | [optional] 
**deleted** | **bool** | Output only. &#x60;True&#x60; if this alert is marked for deletion. | [optional] 
**end_time** | **str** | Optional. The time the event that caused this alert ceased being active. If provided, the end time must not be earlier than the start time. If not provided, it indicates an ongoing alert. | [optional] 
**etag** | **str** | Optional. &#x60;etag&#x60; is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert from overwriting each other. It is strongly suggested that systems make use of the &#x60;etag&#x60; in the read-modify-write cycle to perform alert updates in order to avoid race conditions: An &#x60;etag&#x60; is returned in the response which contains alerts, and systems are expected to put that etag in the request to update alert to ensure that their change will be applied to the same version of the alert. If no &#x60;etag&#x60; is provided in the call to update alert, then the existing alert is overwritten blindly. | [optional] 
**metadata** | [**AlertMetadata**](AlertMetadata.md) |  | [optional] 
**security_investigation_tool_link** | **str** | Output only. An optional [Security Investigation Tool](https://support.google.com/a/answer/7575955) query for this alert. | [optional] 
**source** | **str** | Required. A unique identifier for the system that reported the alert. This is output only after alert is created. Supported sources are any of the following: * Google Operations * Mobile device management * Gmail phishing * Data Loss Prevention * Domain wide takeout * State sponsored attack * Google identity * Apps outage | [optional] 
**start_time** | **str** | Required. The time the event that caused this alert was started or detected. | [optional] 
**type** | **str** | Required. The type of the alert. This is output only after alert is created. For a list of available alert types see [Google Workspace Alert types](https://developers.google.com/admin-sdk/alertcenter/reference/alert-types). | [optional] 
**update_time** | **str** | Output only. The time this alert was last updated. | [optional] 

## Example

```python
from openapi_client.models.alert import Alert

# TODO update the JSON string below
json = "{}"
# create an instance of Alert from a JSON string
alert_instance = Alert.from_json(json)
# print the JSON string representation of the object
print(Alert.to_json())

# convert the object into a dict
alert_dict = alert_instance.to_dict()
# create an instance of Alert from a dict
alert_from_dict = Alert.from_dict(alert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


