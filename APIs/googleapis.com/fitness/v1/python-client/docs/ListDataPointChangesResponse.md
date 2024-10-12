# ListDataPointChangesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_id** | **str** | The data stream ID of the data source with data point changes. | [optional] 
**deleted_data_point** | [**List[DataPoint]**](DataPoint.md) | Deleted data points for the user. Note, for modifications this should be parsed before handling insertions. | [optional] 
**inserted_data_point** | [**List[DataPoint]**](DataPoint.md) | Inserted data points for the user. | [optional] 
**next_page_token** | **str** | The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_data_point_changes_response import ListDataPointChangesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDataPointChangesResponse from a JSON string
list_data_point_changes_response_instance = ListDataPointChangesResponse.from_json(json)
# print the JSON string representation of the object
print(ListDataPointChangesResponse.to_json())

# convert the object into a dict
list_data_point_changes_response_dict = list_data_point_changes_response_instance.to_dict()
# create an instance of ListDataPointChangesResponse from a dict
list_data_point_changes_response_from_dict = ListDataPointChangesResponse.from_dict(list_data_point_changes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


