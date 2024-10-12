# EnrollDataSourcesRequest

A request to enroll a set of data sources so they are visible in the BigQuery UI's `Transfer` tab.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_ids** | **List[str]** | Data sources that are enrolled. It is required to provide at least one data source id. | [optional] 

## Example

```python
from openapi_client.models.enroll_data_sources_request import EnrollDataSourcesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EnrollDataSourcesRequest from a JSON string
enroll_data_sources_request_instance = EnrollDataSourcesRequest.from_json(json)
# print the JSON string representation of the object
print(EnrollDataSourcesRequest.to_json())

# convert the object into a dict
enroll_data_sources_request_dict = enroll_data_sources_request_instance.to_dict()
# create an instance of EnrollDataSourcesRequest from a dict
enroll_data_sources_request_from_dict = EnrollDataSourcesRequest.from_dict(enroll_data_sources_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


