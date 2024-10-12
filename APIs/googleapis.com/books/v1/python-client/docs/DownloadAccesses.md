# DownloadAccesses


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_access_list** | [**List[DownloadAccessRestriction]**](DownloadAccessRestriction.md) | A list of download access responses. | [optional] 
**kind** | **str** | Resource type. | [optional] 

## Example

```python
from openapi_client.models.download_accesses import DownloadAccesses

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadAccesses from a JSON string
download_accesses_instance = DownloadAccesses.from_json(json)
# print the JSON string representation of the object
print(DownloadAccesses.to_json())

# convert the object into a dict
download_accesses_dict = download_accesses_instance.to_dict()
# create an instance of DownloadAccesses from a dict
download_accesses_from_dict = DownloadAccesses.from_dict(download_accesses_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


