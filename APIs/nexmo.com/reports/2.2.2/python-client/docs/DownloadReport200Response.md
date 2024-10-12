# DownloadReport200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report** | [**List[DownloadReport200ResponseReportInner]**](DownloadReport200ResponseReportInner.md) | The report in CSV format inside the zip archive. | [optional] 

## Example

```python
from openapi_client.models.download_report200_response import DownloadReport200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadReport200Response from a JSON string
download_report200_response_instance = DownloadReport200Response.from_json(json)
# print the JSON string representation of the object
print(DownloadReport200Response.to_json())

# convert the object into a dict
download_report200_response_dict = download_report200_response_instance.to_dict()
# create an instance of DownloadReport200Response from a dict
download_report200_response_from_dict = DownloadReport200Response.from_dict(download_report200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


