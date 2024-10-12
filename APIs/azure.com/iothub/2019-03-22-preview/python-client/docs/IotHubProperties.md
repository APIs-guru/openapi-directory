# IotHubProperties

The properties of an IoT hub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_policies** | [**List[SharedAccessSignatureAuthorizationRule]**](SharedAccessSignatureAuthorizationRule.md) | The shared access policies you can use to secure a connection to the IoT hub. | [optional] 
**cloud_to_device** | [**CloudToDeviceProperties**](CloudToDeviceProperties.md) |  | [optional] 
**comments** | **str** | IoT hub comments. | [optional] 
**device_streams** | [**IotHubPropertiesDeviceStreams**](IotHubPropertiesDeviceStreams.md) |  | [optional] 
**enable_file_upload_notifications** | **bool** | If True, file upload notifications are enabled. | [optional] 
**event_hub_endpoints** | [**Dict[str, EventHubProperties]**](EventHubProperties.md) | The Event Hub-compatible endpoint properties. The only possible keys to this dictionary is events. This key has to be present in the dictionary while making create or update calls for the IoT hub. | [optional] 
**features** | **str** | The capabilities and features enabled for the IoT hub. | [optional] 
**host_name** | **str** | The name of the host. | [optional] [readonly] 
**ip_filter_rules** | [**List[IpFilterRule]**](IpFilterRule.md) | The IP filter rules. | [optional] 
**locations** | [**List[IotHubLocationDescription]**](IotHubLocationDescription.md) | Primary and secondary location for iot hub | [optional] [readonly] 
**messaging_endpoints** | [**Dict[str, MessagingEndpointProperties]**](MessagingEndpointProperties.md) | The messaging endpoint properties for the file upload notification queue. | [optional] 
**provisioning_state** | **str** | The provisioning state. | [optional] [readonly] 
**routing** | [**RoutingProperties**](RoutingProperties.md) |  | [optional] 
**state** | **str** | The hub state. | [optional] [readonly] 
**storage_endpoints** | [**Dict[str, StorageEndpointProperties]**](StorageEndpointProperties.md) | The list of Azure Storage endpoints where you can upload files. Currently you can configure only one Azure Storage account and that MUST have its key as $default. Specifying more than one storage account causes an error to be thrown. Not specifying a value for this property when the enableFileUploadNotifications property is set to True, causes an error to be thrown. | [optional] 

## Example

```python
from openapi_client.models.iot_hub_properties import IotHubProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IotHubProperties from a JSON string
iot_hub_properties_instance = IotHubProperties.from_json(json)
# print the JSON string representation of the object
print(IotHubProperties.to_json())

# convert the object into a dict
iot_hub_properties_dict = iot_hub_properties_instance.to_dict()
# create an instance of IotHubProperties from a dict
iot_hub_properties_from_dict = IotHubProperties.from_dict(iot_hub_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


