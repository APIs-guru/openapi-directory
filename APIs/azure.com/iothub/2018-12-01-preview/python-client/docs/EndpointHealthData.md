# EndpointHealthData

The health data for an endpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_id** | **str** | Id of the endpoint | [optional] 
**health_status** | **str** | Health statuses have following meanings. The &#39;healthy&#39; status shows that the endpoint is accepting messages as expected. The &#39;unhealthy&#39; status shows that the endpoint is not accepting messages as expected and IoT Hub is retrying to send data to this endpoint. The status of an unhealthy endpoint will be updated to healthy when IoT Hub has established an eventually consistent state of health. The &#39;dead&#39; status shows that the endpoint is not accepting messages, after IoT Hub retried sending messages for the retrial period. See IoT Hub metrics to identify errors and monitor issues with endpoints. The &#39;unknown&#39; status shows that the IoT Hub has not established a connection with the endpoint. No messages have been delivered to or rejected from this endpoint | [optional] 

## Example

```python
from openapi_client.models.endpoint_health_data import EndpointHealthData

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointHealthData from a JSON string
endpoint_health_data_instance = EndpointHealthData.from_json(json)
# print the JSON string representation of the object
print(EndpointHealthData.to_json())

# convert the object into a dict
endpoint_health_data_dict = endpoint_health_data_instance.to_dict()
# create an instance of EndpointHealthData from a dict
endpoint_health_data_from_dict = EndpointHealthData.from_dict(endpoint_health_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


