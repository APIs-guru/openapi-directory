# BlobProperties

Properties of the blob data set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_name** | **str** | Container that has the file path. | 
**data_set_id** | **str** | Unique id for identifying a data set resource | [optional] [readonly] 
**file_path** | **str** | File path within the source data set | 
**resource_group** | **str** | Resource group of storage account | 
**storage_account_name** | **str** | Storage account name of the source data set | 
**subscription_id** | **str** | Subscription id of storage account | 

## Example

```python
from openapi_client.models.blob_properties import BlobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BlobProperties from a JSON string
blob_properties_instance = BlobProperties.from_json(json)
# print the JSON string representation of the object
print(BlobProperties.to_json())

# convert the object into a dict
blob_properties_dict = blob_properties_instance.to_dict()
# create an instance of BlobProperties from a dict
blob_properties_from_dict = BlobProperties.from_dict(blob_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


