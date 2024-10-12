# DeleteDataSourceRequest

Deletes a data source. The request also deletes the associated data source sheet, and unlinks all associated data source objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_id** | **str** | The ID of the data source to delete. | [optional] 

## Example

```python
from openapi_client.models.delete_data_source_request import DeleteDataSourceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteDataSourceRequest from a JSON string
delete_data_source_request_instance = DeleteDataSourceRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteDataSourceRequest.to_json())

# convert the object into a dict
delete_data_source_request_dict = delete_data_source_request_instance.to_dict()
# create an instance of DeleteDataSourceRequest from a dict
delete_data_source_request_from_dict = DeleteDataSourceRequest.from_dict(delete_data_source_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


