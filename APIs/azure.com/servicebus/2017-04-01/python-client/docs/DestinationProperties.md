# DestinationProperties

Properties describing the storage account, blob container and archive name format for capture destination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_name_format** | **str** | Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order | [optional] 
**blob_container** | **str** | Blob container Name | [optional] 
**storage_account_resource_id** | **str** | Resource id of the storage account to be used to create the blobs | [optional] 

## Example

```python
from openapi_client.models.destination_properties import DestinationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationProperties from a JSON string
destination_properties_instance = DestinationProperties.from_json(json)
# print the JSON string representation of the object
print(DestinationProperties.to_json())

# convert the object into a dict
destination_properties_dict = destination_properties_instance.to_dict()
# create an instance of DestinationProperties from a dict
destination_properties_from_dict = DestinationProperties.from_dict(destination_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


