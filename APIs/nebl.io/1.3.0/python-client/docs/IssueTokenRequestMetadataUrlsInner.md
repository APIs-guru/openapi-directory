# IssueTokenRequestMetadataUrlsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_hash** | **str** | Hash of data at the URL, used for verification | [optional] 
**mime_type** | **str** | mimeType of URL content | [optional] 
**name** | **str** | Name of the URL | [optional] 
**url** | **str** | Actual URL | [optional] 

## Example

```python
from openapi_client.models.issue_token_request_metadata_urls_inner import IssueTokenRequestMetadataUrlsInner

# TODO update the JSON string below
json = "{}"
# create an instance of IssueTokenRequestMetadataUrlsInner from a JSON string
issue_token_request_metadata_urls_inner_instance = IssueTokenRequestMetadataUrlsInner.from_json(json)
# print the JSON string representation of the object
print(IssueTokenRequestMetadataUrlsInner.to_json())

# convert the object into a dict
issue_token_request_metadata_urls_inner_dict = issue_token_request_metadata_urls_inner_instance.to_dict()
# create an instance of IssueTokenRequestMetadataUrlsInner from a dict
issue_token_request_metadata_urls_inner_from_dict = IssueTokenRequestMetadataUrlsInner.from_dict(issue_token_request_metadata_urls_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


