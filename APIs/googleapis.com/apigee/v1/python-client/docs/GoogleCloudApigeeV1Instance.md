# GoogleCloudApigeeV1Instance

Apigee runtime instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_accept_list** | **List[str]** | Optional. Customer accept list represents the list of projects (id/number) on customer side that can privately connect to the service attachment. It is an optional field which the customers can provide during the instance creation. By default, the customer project associated with the Apigee organization will be included to the list. | [optional] 
**created_at** | **str** | Output only. Time the instance was created in milliseconds since epoch. | [optional] [readonly] 
**description** | **str** | Optional. Description of the instance. | [optional] 
**disk_encryption_key_name** | **str** | Customer Managed Encryption Key (CMEK) used for disk and volume encryption. Required for Apigee paid subscriptions only. Use the following format: &#x60;projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)&#x60; | [optional] 
**display_name** | **str** | Optional. Display name for the instance. | [optional] 
**host** | **str** | Output only. Internal hostname or IP address of the Apigee endpoint used by clients to connect to the service. | [optional] [readonly] 
**ip_range** | **str** | Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should be freely available as part of a larger named range you have allocated to the Service Networking peering. If this parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats: &#x60;a.b.c.d/22&#x60; or &#x60;e.f.g.h/28&#x60; or &#x60;a.b.c.d/22,e.f.g.h/28&#x60; | [optional] 
**last_modified_at** | **str** | Output only. Time the instance was last modified in milliseconds since epoch. | [optional] [readonly] 
**location** | **str** | Required. Compute Engine location where the instance resides. | [optional] 
**name** | **str** | Required. Resource ID of the instance. Values must match the regular expression &#x60;^a-z{0,30}[a-z\\d]$&#x60;. | [optional] 
**peering_cidr_range** | **str** | Optional. Size of the CIDR block range that will be reserved by the instance. PAID organizations support &#x60;SLASH_16&#x60; to &#x60;SLASH_20&#x60; and defaults to &#x60;SLASH_16&#x60;. Evaluation organizations support only &#x60;SLASH_23&#x60;. | [optional] 
**port** | **str** | Output only. Port number of the exposed Apigee endpoint. | [optional] [readonly] 
**runtime_version** | **str** | Output only. Version of the runtime system running in the instance. The runtime system is the set of components that serve the API Proxy traffic in your Environments. | [optional] [readonly] 
**service_attachment** | **str** | Output only. Resource name of the service attachment created for the instance in the format: &#x60;projects/*/regions/*/serviceAttachments/*&#x60; Apigee customers can privately forward traffic to this service attachment using the PSC endpoints. | [optional] [readonly] 
**state** | **str** | Output only. State of the instance. Values other than &#x60;ACTIVE&#x60; means the resource is not ready to use. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_instance import GoogleCloudApigeeV1Instance

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Instance from a JSON string
google_cloud_apigee_v1_instance_instance = GoogleCloudApigeeV1Instance.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Instance.to_json())

# convert the object into a dict
google_cloud_apigee_v1_instance_dict = google_cloud_apigee_v1_instance_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Instance from a dict
google_cloud_apigee_v1_instance_from_dict = GoogleCloudApigeeV1Instance.from_dict(google_cloud_apigee_v1_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


