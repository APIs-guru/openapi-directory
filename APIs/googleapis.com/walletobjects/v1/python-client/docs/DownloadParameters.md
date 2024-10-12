# DownloadParameters

Parameters specific to media downloads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_gzip_compression** | **bool** | A boolean to be returned in the response to Scotty. Allows/disallows gzip encoding of the payload content when the server thinks it&#39;s advantageous (hence, does not guarantee compression) which allows Scotty to GZip the response to the client. | [optional] 
**ignore_range** | **bool** | Determining whether or not Apiary should skip the inclusion of any Content-Range header on its response to Scotty. | [optional] 

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


