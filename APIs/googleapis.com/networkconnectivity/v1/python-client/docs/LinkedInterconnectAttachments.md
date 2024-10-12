# LinkedInterconnectAttachments

A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**site_to_site_data_transfer** | **bool** | A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations). | [optional] 
**uris** | **List[str]** | The URIs of linked interconnect attachment resources | [optional] 
**vpc_network** | **str** | Output only. The VPC network where these VLAN attachments are located. | [optional] [readonly] 

## Example

```python
from openapi_client.models.linked_interconnect_attachments import LinkedInterconnectAttachments

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedInterconnectAttachments from a JSON string
linked_interconnect_attachments_instance = LinkedInterconnectAttachments.from_json(json)
# print the JSON string representation of the object
print(LinkedInterconnectAttachments.to_json())

# convert the object into a dict
linked_interconnect_attachments_dict = linked_interconnect_attachments_instance.to_dict()
# create an instance of LinkedInterconnectAttachments from a dict
linked_interconnect_attachments_from_dict = LinkedInterconnectAttachments.from_dict(linked_interconnect_attachments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


