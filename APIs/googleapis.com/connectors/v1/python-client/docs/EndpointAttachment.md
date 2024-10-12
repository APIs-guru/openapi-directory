# EndpointAttachment

represents the Connector's Endpoint Attachment resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Created time. | [optional] [readonly] 
**description** | **str** | Optional. Description of the resource. | [optional] 
**endpoint_ip** | **str** | Output only. The Private Service Connect connection endpoint ip | [optional] [readonly] 
**labels** | **Dict[str, str]** | Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources | [optional] 
**name** | **str** | Output only. Resource name of the Endpoint Attachment. Format: projects/{project}/locations/{location}/endpointAttachments/{endpoint_attachment} | [optional] [readonly] 
**service_attachment** | **str** | Required. The path of the service attachment | [optional] 
**update_time** | **str** | Output only. Updated time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.endpoint_attachment import EndpointAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointAttachment from a JSON string
endpoint_attachment_instance = EndpointAttachment.from_json(json)
# print the JSON string representation of the object
print(EndpointAttachment.to_json())

# convert the object into a dict
endpoint_attachment_dict = endpoint_attachment_instance.to_dict()
# create an instance of EndpointAttachment from a dict
endpoint_attachment_from_dict = EndpointAttachment.from_dict(endpoint_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


