# RequestReportCollection

Paged Report records list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**value** | [**List[RequestReportRecordContract]**](RequestReportRecordContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.request_report_collection import RequestReportCollection

# TODO update the JSON string below
json = "{}"
# create an instance of RequestReportCollection from a JSON string
request_report_collection_instance = RequestReportCollection.from_json(json)
# print the JSON string representation of the object
print(RequestReportCollection.to_json())

# convert the object into a dict
request_report_collection_dict = request_report_collection_instance.to_dict()
# create an instance of RequestReportCollection from a dict
request_report_collection_from_dict = RequestReportCollection.from_dict(request_report_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


