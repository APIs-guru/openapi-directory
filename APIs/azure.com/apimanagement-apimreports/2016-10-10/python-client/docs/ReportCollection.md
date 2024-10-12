# ReportCollection

Paged Report records list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ReportRecordContract]**](ReportRecordContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.report_collection import ReportCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ReportCollection from a JSON string
report_collection_instance = ReportCollection.from_json(json)
# print the JSON string representation of the object
print(ReportCollection.to_json())

# convert the object into a dict
report_collection_dict = report_collection_instance.to_dict()
# create an instance of ReportCollection from a dict
report_collection_from_dict = ReportCollection.from_dict(report_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


