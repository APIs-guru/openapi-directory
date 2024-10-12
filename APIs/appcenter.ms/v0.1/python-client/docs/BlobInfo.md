# BlobInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **float** |  | 
**url** | **str** |  | 

## Example

```python
from openapi_client.models.blob_info import BlobInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BlobInfo from a JSON string
blob_info_instance = BlobInfo.from_json(json)
# print the JSON string representation of the object
print(BlobInfo.to_json())

# convert the object into a dict
blob_info_dict = blob_info_instance.to_dict()
# create an instance of BlobInfo from a dict
blob_info_from_dict = BlobInfo.from_dict(blob_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


