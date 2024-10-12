# UploadSummary

This container provides summary information on an upload feed (not applicable for download feed types).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_count** | **int** | The number of records, such as the number of listings created or the number of pictures uploaded to a listing, that failed to process during the upload feed. Check the response file and correct any issues mentioned. If the feed fails before processing, no response file is provided. In this case check the REST output response. | [optional] 
**success_count** | **int** | The number of records that were successfully processed during the upload feed. | [optional] 

## Example

```python
from openapi_client.models.upload_summary import UploadSummary

# TODO update the JSON string below
json = "{}"
# create an instance of UploadSummary from a JSON string
upload_summary_instance = UploadSummary.from_json(json)
# print the JSON string representation of the object
print(UploadSummary.to_json())

# convert the object into a dict
upload_summary_dict = upload_summary_instance.to_dict()
# create an instance of UploadSummary from a dict
upload_summary_from_dict = UploadSummary.from_dict(upload_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


