# DownloadParameters

# gdata.* are outside protos with mising documentation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_gzip_compression** | **bool** | # gdata.* are outside protos with mising documentation | [optional] 
**ignore_range** | **bool** | # gdata.* are outside protos with mising documentation | [optional] 

## Example

```python
from openapi_client.models.download_parameters import DownloadParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadParameters from a JSON string
download_parameters_instance = DownloadParameters.from_json(json)
# print the JSON string representation of the object
print(DownloadParameters.to_json())

# convert the object into a dict
download_parameters_dict = download_parameters_instance.to_dict()
# create an instance of DownloadParameters from a dict
download_parameters_from_dict = DownloadParameters.from_dict(download_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


