# AzureBlob

Azure or AzureStack blob information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | URI to Azure or AzureStack blob. | [optional] 

## Example

```python
from openapi_client.models.azure_blob import AzureBlob

# TODO update the JSON string below
json = "{}"
# create an instance of AzureBlob from a JSON string
azure_blob_instance = AzureBlob.from_json(json)
# print the JSON string representation of the object
print(AzureBlob.to_json())

# convert the object into a dict
azure_blob_dict = azure_blob_instance.to_dict()
# create an instance of AzureBlob from a dict
azure_blob_from_dict = AzureBlob.from_dict(azure_blob_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


