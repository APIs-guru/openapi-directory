# BatchGetAmpUrlsRequest

AMP URL request for a batch of URLs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lookup_strategy** | **str** | The lookup_strategy being requested. | [optional] 
**urls** | **List[str]** | List of URLs to look up for the paired AMP URLs. The URLs are case-sensitive. Up to 50 URLs per lookup (see [Usage Limits](/amp/cache/reference/limits)). | [optional] 

## Example

```python
from openapi_client.models.batch_get_amp_urls_request import BatchGetAmpUrlsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetAmpUrlsRequest from a JSON string
batch_get_amp_urls_request_instance = BatchGetAmpUrlsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchGetAmpUrlsRequest.to_json())

# convert the object into a dict
batch_get_amp_urls_request_dict = batch_get_amp_urls_request_instance.to_dict()
# create an instance of BatchGetAmpUrlsRequest from a dict
batch_get_amp_urls_request_from_dict = BatchGetAmpUrlsRequest.from_dict(batch_get_amp_urls_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


