# GoogleCloudApigeeV1NatAddress

Apigee NAT(network address translation) address. A NAT address is a static external IP address used for Internet egress traffic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | Output only. The static IPV4 address. | [optional] [readonly] 
**name** | **str** | Required. Resource ID of the NAT address. | [optional] 
**state** | **str** | Output only. State of the nat address. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_nat_address import GoogleCloudApigeeV1NatAddress

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1NatAddress from a JSON string
google_cloud_apigee_v1_nat_address_instance = GoogleCloudApigeeV1NatAddress.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1NatAddress.to_json())

# convert the object into a dict
google_cloud_apigee_v1_nat_address_dict = google_cloud_apigee_v1_nat_address_instance.to_dict()
# create an instance of GoogleCloudApigeeV1NatAddress from a dict
google_cloud_apigee_v1_nat_address_from_dict = GoogleCloudApigeeV1NatAddress.from_dict(google_cloud_apigee_v1_nat_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


