# GoogleCloudApigeeV1EndpointAttachment

Apigee endpoint attachment. For more information, see [Southbound networking patterns] (https://cloud.google.com/apigee/docs/api-platform/architecture/southbound-networking-patterns-endpoints).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_state** | **str** | Output only. State of the endpoint attachment connection to the service attachment. | [optional] [readonly] 
**host** | **str** | Output only. Host that can be used in either the HTTP target endpoint directly or as the host in target server. | [optional] [readonly] 
**location** | **str** | Required. Location of the endpoint attachment. | [optional] 
**name** | **str** | Name of the endpoint attachment. Use the following structure in your request: &#x60;organizations/{org}/endpointAttachments/{endpoint_attachment}&#x60; | [optional] 
**service_attachment** | **str** | Format: projects/*/regions/*/serviceAttachments/* | [optional] 
**state** | **str** | Output only. State of the endpoint attachment. Values other than &#x60;ACTIVE&#x60; mean the resource is not ready to use. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_endpoint_attachment import GoogleCloudApigeeV1EndpointAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1EndpointAttachment from a JSON string
google_cloud_apigee_v1_endpoint_attachment_instance = GoogleCloudApigeeV1EndpointAttachment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1EndpointAttachment.to_json())

# convert the object into a dict
google_cloud_apigee_v1_endpoint_attachment_dict = google_cloud_apigee_v1_endpoint_attachment_instance.to_dict()
# create an instance of GoogleCloudApigeeV1EndpointAttachment from a dict
google_cloud_apigee_v1_endpoint_attachment_from_dict = GoogleCloudApigeeV1EndpointAttachment.from_dict(google_cloud_apigee_v1_endpoint_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


