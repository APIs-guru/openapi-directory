# DownloadRef

Models a download \"link\".  Useful for browser use-cases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_id** | **str** |  | 
**href** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.download_ref import DownloadRef

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadRef from a JSON string
download_ref_instance = DownloadRef.from_json(json)
# print the JSON string representation of the object
print(DownloadRef.to_json())

# convert the object into a dict
download_ref_dict = download_ref_instance.to_dict()
# create an instance of DownloadRef from a dict
download_ref_from_dict = DownloadRef.from_dict(download_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


