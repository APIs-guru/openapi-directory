# ServiceAttachment

Service attachment configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_status** | **str** | Output only. Connection status. | [optional] [readonly] 
**local_fqdn** | **str** | Required. Fully qualified domain name that will be used in the private DNS record created for the service attachment. | [optional] 
**target_service_attachment_uri** | **str** | Required. URI of the service attachment to connect to. Format: projects/{project}/regions/{region}/serviceAttachments/{service_attachment} | [optional] 

## Example

```python
from openapi_client.models.service_attachment import ServiceAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceAttachment from a JSON string
service_attachment_instance = ServiceAttachment.from_json(json)
# print the JSON string representation of the object
print(ServiceAttachment.to_json())

# convert the object into a dict
service_attachment_dict = service_attachment_instance.to_dict()
# create an instance of ServiceAttachment from a dict
service_attachment_from_dict = ServiceAttachment.from_dict(service_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


