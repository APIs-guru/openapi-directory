# UnenrollDataSourcesRequest

A request to unenroll a set of data sources so they are no longer visible in the BigQuery UI's `Transfer` tab.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_ids** | **List[str]** | Data sources that are unenrolled. It is required to provide at least one data source id. | [optional] 

## Example

```python
from openapi_client.models.unenroll_data_sources_request import UnenrollDataSourcesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UnenrollDataSourcesRequest from a JSON string
unenroll_data_sources_request_instance = UnenrollDataSourcesRequest.from_json(json)
# print the JSON string representation of the object
print(UnenrollDataSourcesRequest.to_json())

# convert the object into a dict
unenroll_data_sources_request_dict = unenroll_data_sources_request_instance.to_dict()
# create an instance of UnenrollDataSourcesRequest from a dict
unenroll_data_sources_request_from_dict = UnenrollDataSourcesRequest.from_dict(unenroll_data_sources_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


