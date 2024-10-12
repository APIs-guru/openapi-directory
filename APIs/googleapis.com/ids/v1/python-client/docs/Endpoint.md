# Endpoint

Endpoint describes a single IDS endpoint. It defines a forwarding rule to which packets can be sent for IDS inspection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The create time timestamp. | [optional] [readonly] 
**description** | **str** | User-provided description of the endpoint | [optional] 
**endpoint_forwarding_rule** | **str** | Output only. The fully qualified URL of the endpoint&#39;s ILB Forwarding Rule. | [optional] [readonly] 
**endpoint_ip** | **str** | Output only. The IP address of the IDS Endpoint&#39;s ILB. | [optional] [readonly] 
**labels** | **Dict[str, str]** | The labels of the endpoint. | [optional] 
**name** | **str** | Output only. The name of the endpoint. | [optional] [readonly] 
**network** | **str** | Required. The fully qualified URL of the network to which the IDS Endpoint is attached. | [optional] 
**severity** | **str** | Required. Lowest threat severity that this endpoint will alert on. | [optional] 
**state** | **str** | Output only. Current state of the endpoint. | [optional] [readonly] 
**threat_exceptions** | **List[str]** | List of threat IDs to be excepted from generating alerts. | [optional] 
**traffic_logs** | **bool** | Whether the endpoint should report traffic logs in addition to threat logs. | [optional] 
**update_time** | **str** | Output only. The update time timestamp. | [optional] [readonly] 

## Example

```python
from openapi_client.models.endpoint import Endpoint

# TODO update the JSON string below
json = "{}"
# create an instance of Endpoint from a JSON string
endpoint_instance = Endpoint.from_json(json)
# print the JSON string representation of the object
print(Endpoint.to_json())

# convert the object into a dict
endpoint_dict = endpoint_instance.to_dict()
# create an instance of Endpoint from a dict
endpoint_from_dict = Endpoint.from_dict(endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


