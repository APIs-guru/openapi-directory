# GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface

Logical interface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Interface name. This is not a globally unique identifier. Name is unique only inside the ServerNetworkTemplate. This is of syntax or and forms part of the network template name. | [optional] 
**required** | **bool** | If true, interface must have network connected. | [optional] 
**type** | **str** | Interface type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_baremetalsolution_v2_server_network_template_logical_interface import GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface from a JSON string
google_cloud_baremetalsolution_v2_server_network_template_logical_interface_instance = GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface.to_json())

# convert the object into a dict
google_cloud_baremetalsolution_v2_server_network_template_logical_interface_dict = google_cloud_baremetalsolution_v2_server_network_template_logical_interface_instance.to_dict()
# create an instance of GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface from a dict
google_cloud_baremetalsolution_v2_server_network_template_logical_interface_from_dict = GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface.from_dict(google_cloud_baremetalsolution_v2_server_network_template_logical_interface_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


