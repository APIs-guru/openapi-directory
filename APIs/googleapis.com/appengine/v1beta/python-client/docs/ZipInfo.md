# ZipInfo

The zip file information for a zip deployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files_count** | **int** | An estimate of the number of files in a zip for a zip deployment. If set, must be greater than or equal to the actual number of files. Used for optimizing performance; if not provided, deployment may be slow. | [optional] 
**source_url** | **str** | URL of the zip file to deploy from. Must be a URL to a resource in Google Cloud Storage in the form &#39;http(s)://storage.googleapis.com//&#39;. | [optional] 

## Example

```python
from openapi_client.models.zip_info import ZipInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ZipInfo from a JSON string
zip_info_instance = ZipInfo.from_json(json)
# print the JSON string representation of the object
print(ZipInfo.to_json())

# convert the object into a dict
zip_info_dict = zip_info_instance.to_dict()
# create an instance of ZipInfo from a dict
zip_info_from_dict = ZipInfo.from_dict(zip_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


