# UsageDetailsDownloadResponse

Download response of Usage Details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DownloadUrl**](DownloadUrl.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.usage_details_download_response import UsageDetailsDownloadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UsageDetailsDownloadResponse from a JSON string
usage_details_download_response_instance = UsageDetailsDownloadResponse.from_json(json)
# print the JSON string representation of the object
print(UsageDetailsDownloadResponse.to_json())

# convert the object into a dict
usage_details_download_response_dict = usage_details_download_response_instance.to_dict()
# create an instance of UsageDetailsDownloadResponse from a dict
usage_details_download_response_from_dict = UsageDetailsDownloadResponse.from_dict(usage_details_download_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


