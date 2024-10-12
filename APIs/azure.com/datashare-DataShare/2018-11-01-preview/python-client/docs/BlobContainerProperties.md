# BlobContainerProperties

Properties of the BLOB container data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_name** | **str** | BLOB Container name. | 
**data_set_id** | **str** | Unique id for identifying a data set resource | [optional] [readonly] 
**resource_group** | **str** | Resource group of storage account | 
**storage_account_name** | **str** | Storage account name of the source data set | 
**subscription_id** | **str** | Subscription id of storage account | 

## Example

```python
from openapi_client.models.blob_container_properties import BlobContainerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BlobContainerProperties from a JSON string
blob_container_properties_instance = BlobContainerProperties.from_json(json)
# print the JSON string representation of the object
print(BlobContainerProperties.to_json())

# convert the object into a dict
blob_container_properties_dict = blob_container_properties_instance.to_dict()
# create an instance of BlobContainerProperties from a dict
blob_container_properties_from_dict = BlobContainerProperties.from_dict(blob_container_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


