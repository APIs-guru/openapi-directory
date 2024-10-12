# ListDataSourceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**sources** | [**List[DataSource]**](DataSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_data_source_response import ListDataSourceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDataSourceResponse from a JSON string
list_data_source_response_instance = ListDataSourceResponse.from_json(json)
# print the JSON string representation of the object
print(ListDataSourceResponse.to_json())

# convert the object into a dict
list_data_source_response_dict = list_data_source_response_instance.to_dict()
# create an instance of ListDataSourceResponse from a dict
list_data_source_response_from_dict = ListDataSourceResponse.from_dict(list_data_source_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


