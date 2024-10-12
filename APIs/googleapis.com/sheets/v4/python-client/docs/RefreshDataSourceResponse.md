# RefreshDataSourceResponse

The response from refreshing one or multiple data source objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**statuses** | [**List[RefreshDataSourceObjectExecutionStatus]**](RefreshDataSourceObjectExecutionStatus.md) | All the refresh status for the data source object references specified in the request. If is_all is specified, the field contains only those in failure status. | [optional] 

## Example

```python
from openapi_client.models.refresh_data_source_response import RefreshDataSourceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RefreshDataSourceResponse from a JSON string
refresh_data_source_response_instance = RefreshDataSourceResponse.from_json(json)
# print the JSON string representation of the object
print(RefreshDataSourceResponse.to_json())

# convert the object into a dict
refresh_data_source_response_dict = refresh_data_source_response_instance.to_dict()
# create an instance of RefreshDataSourceResponse from a dict
refresh_data_source_response_from_dict = RefreshDataSourceResponse.from_dict(refresh_data_source_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


