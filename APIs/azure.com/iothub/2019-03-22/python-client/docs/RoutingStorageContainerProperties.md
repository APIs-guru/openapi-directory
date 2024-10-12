# RoutingStorageContainerProperties

The properties related to a storage container endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_frequency_in_seconds** | **int** | Time interval at which blobs are written to storage. Value should be between 60 and 720 seconds. Default value is 300 seconds. | [optional] 
**connection_string** | **str** | The connection string of the storage account. | 
**container_name** | **str** | The name of storage container in the storage account. | 
**encoding** | **str** | Encoding that is used to serialize messages to blobs. Supported values are &#39;avro&#39;, &#39;avrodeflate&#39;, and &#39;JSON&#39;. Default value is &#39;avro&#39;. | [optional] 
**file_name_format** | **str** | File name format for the blob. Default format is {iothub}/{partition}/{YYYY}/{MM}/{DD}/{HH}/{mm}. All parameters are mandatory but can be reordered. | [optional] 
**max_chunk_size_in_bytes** | **int** | Maximum number of bytes for each blob written to storage. Value should be between 10485760(10MB) and 524288000(500MB). Default value is 314572800(300MB). | [optional] 
**name** | **str** | The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types. | 
**resource_group** | **str** | The name of the resource group of the storage account. | [optional] 
**subscription_id** | **str** | The subscription identifier of the storage account. | [optional] 

## Example

```python
from openapi_client.models.routing_storage_container_properties import RoutingStorageContainerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingStorageContainerProperties from a JSON string
routing_storage_container_properties_instance = RoutingStorageContainerProperties.from_json(json)
# print the JSON string representation of the object
print(RoutingStorageContainerProperties.to_json())

# convert the object into a dict
routing_storage_container_properties_dict = routing_storage_container_properties_instance.to_dict()
# create an instance of RoutingStorageContainerProperties from a dict
routing_storage_container_properties_from_dict = RoutingStorageContainerProperties.from_dict(routing_storage_container_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


