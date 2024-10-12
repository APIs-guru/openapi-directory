# GdataDownloadParameters

gdata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_gzip_compression** | **bool** | gdata | [optional] 
**ignore_range** | **bool** | gdata | [optional] 

## Example

```python
from openapi_client.models.gdata_download_parameters import GdataDownloadParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GdataDownloadParameters from a JSON string
gdata_download_parameters_instance = GdataDownloadParameters.from_json(json)
# print the JSON string representation of the object
print(GdataDownloadParameters.to_json())

# convert the object into a dict
gdata_download_parameters_dict = gdata_download_parameters_instance.to_dict()
# create an instance of GdataDownloadParameters from a dict
gdata_download_parameters_from_dict = GdataDownloadParameters.from_dict(gdata_download_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


