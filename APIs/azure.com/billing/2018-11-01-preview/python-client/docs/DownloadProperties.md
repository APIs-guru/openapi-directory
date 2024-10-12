# DownloadProperties

The properties of the invoice download.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Document type. | [optional] [readonly] 
**url** | **str** | Document URL. | [optional] [readonly] 

## Example

```python
from openapi_client.models.download_properties import DownloadProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadProperties from a JSON string
download_properties_instance = DownloadProperties.from_json(json)
# print the JSON string representation of the object
print(DownloadProperties.to_json())

# convert the object into a dict
download_properties_dict = download_properties_instance.to_dict()
# create an instance of DownloadProperties from a dict
download_properties_from_dict = DownloadProperties.from_dict(download_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


