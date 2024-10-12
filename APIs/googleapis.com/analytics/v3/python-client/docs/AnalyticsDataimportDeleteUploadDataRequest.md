# AnalyticsDataimportDeleteUploadDataRequest

Request template for the delete upload data request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_data_import_uids** | **List[str]** | A list of upload UIDs. | [optional] 

## Example

```python
from openapi_client.models.analytics_dataimport_delete_upload_data_request import AnalyticsDataimportDeleteUploadDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsDataimportDeleteUploadDataRequest from a JSON string
analytics_dataimport_delete_upload_data_request_instance = AnalyticsDataimportDeleteUploadDataRequest.from_json(json)
# print the JSON string representation of the object
print(AnalyticsDataimportDeleteUploadDataRequest.to_json())

# convert the object into a dict
analytics_dataimport_delete_upload_data_request_dict = analytics_dataimport_delete_upload_data_request_instance.to_dict()
# create an instance of AnalyticsDataimportDeleteUploadDataRequest from a dict
analytics_dataimport_delete_upload_data_request_from_dict = AnalyticsDataimportDeleteUploadDataRequest.from_dict(analytics_dataimport_delete_upload_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


