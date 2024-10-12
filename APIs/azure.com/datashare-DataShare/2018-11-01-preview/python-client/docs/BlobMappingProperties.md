# BlobMappingProperties

Azure storage Blob data set mapping property bag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_name** | **str** | Container that has the file path. | 
**data_set_id** | **str** | The id of the source data set. | 
**data_set_mapping_status** | **str** | Gets the status of the data set mapping. | [optional] [readonly] 
**file_path** | **str** | File path within the source data set | 
**output_type** | **str** | File output type | [optional] 
**provisioning_state** | **str** | Provisioning state of the data set mapping. | [optional] [readonly] 
**resource_group** | **str** | Resource group of storage account. | 
**storage_account_name** | **str** | Storage account name of the source data set. | 
**subscription_id** | **str** | Subscription id of storage account. | 

## Example

```python
from openapi_client.models.blob_mapping_properties import BlobMappingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BlobMappingProperties from a JSON string
blob_mapping_properties_instance = BlobMappingProperties.from_json(json)
# print the JSON string representation of the object
print(BlobMappingProperties.to_json())

# convert the object into a dict
blob_mapping_properties_dict = blob_mapping_properties_instance.to_dict()
# create an instance of BlobMappingProperties from a dict
blob_mapping_properties_from_dict = BlobMappingProperties.from_dict(blob_mapping_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


