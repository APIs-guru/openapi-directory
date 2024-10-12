# DownloadSizeEvidence

Total download size and URL-level download size breakdown for resources in a creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**top_url_download_size_breakdowns** | [**List[UrlDownloadSize]**](UrlDownloadSize.md) | Download size broken down by URLs with the top download size. | [optional] 
**total_download_size_kb** | **int** | Total download size (in kilobytes) for all the resources in the creative. | [optional] 

## Example

```python
from openapi_client.models.download_size_evidence import DownloadSizeEvidence

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadSizeEvidence from a JSON string
download_size_evidence_instance = DownloadSizeEvidence.from_json(json)
# print the JSON string representation of the object
print(DownloadSizeEvidence.to_json())

# convert the object into a dict
download_size_evidence_dict = download_size_evidence_instance.to_dict()
# create an instance of DownloadSizeEvidence from a dict
download_size_evidence_from_dict = DownloadSizeEvidence.from_dict(download_size_evidence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


