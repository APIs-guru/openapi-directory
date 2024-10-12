# GoogleCloudSecuritycenterV2Connection

Contains information about the IP connection associated with the finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_ip** | **str** | Destination IP address. Not present for sockets that are listening and not connected. | [optional] 
**destination_port** | **int** | Destination port. Not present for sockets that are listening and not connected. | [optional] 
**protocol** | **str** | IANA Internet Protocol Number such as TCP(6) and UDP(17). | [optional] 
**source_ip** | **str** | Source IP address. | [optional] 
**source_port** | **int** | Source port. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_connection import GoogleCloudSecuritycenterV2Connection

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Connection from a JSON string
google_cloud_securitycenter_v2_connection_instance = GoogleCloudSecuritycenterV2Connection.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Connection.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_connection_dict = google_cloud_securitycenter_v2_connection_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Connection from a dict
google_cloud_securitycenter_v2_connection_from_dict = GoogleCloudSecuritycenterV2Connection.from_dict(google_cloud_securitycenter_v2_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


