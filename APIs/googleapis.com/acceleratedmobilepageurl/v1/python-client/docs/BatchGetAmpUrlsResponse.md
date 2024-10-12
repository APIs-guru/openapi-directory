# BatchGetAmpUrlsResponse

Batch AMP URL response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amp_urls** | [**List[AmpUrl]**](AmpUrl.md) | For each URL in BatchAmpUrlsRequest, the URL response. The response might not be in the same order as URLs in the batch request. If BatchAmpUrlsRequest contains duplicate URLs, AmpUrl is generated only once. | [optional] 
**url_errors** | [**List[AmpUrlError]**](AmpUrlError.md) | The errors for requested URLs that have no AMP URL. | [optional] 

## Example

```python
from openapi_client.models.batch_get_amp_urls_response import BatchGetAmpUrlsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetAmpUrlsResponse from a JSON string
batch_get_amp_urls_response_instance = BatchGetAmpUrlsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchGetAmpUrlsResponse.to_json())

# convert the object into a dict
batch_get_amp_urls_response_dict = batch_get_amp_urls_response_instance.to_dict()
# create an instance of BatchGetAmpUrlsResponse from a dict
batch_get_amp_urls_response_from_dict = BatchGetAmpUrlsResponse.from_dict(batch_get_amp_urls_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


