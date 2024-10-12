# FileUrls

The URLs where the completed report file can be downloaded.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_url** | **str** | The URL for downloading the report data through the API. | [optional] 
**browser_url** | **str** | The URL for downloading the report data through a browser. | [optional] 

## Example

```python
from openapi_client.models.file_urls import FileUrls

# TODO update the JSON string below
json = "{}"
# create an instance of FileUrls from a JSON string
file_urls_instance = FileUrls.from_json(json)
# print the JSON string representation of the object
print(FileUrls.to_json())

# convert the object into a dict
file_urls_dict = file_urls_instance.to_dict()
# create an instance of FileUrls from a dict
file_urls_from_dict = FileUrls.from_dict(file_urls_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


