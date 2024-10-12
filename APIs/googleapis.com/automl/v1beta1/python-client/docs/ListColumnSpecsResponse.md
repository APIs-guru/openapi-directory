# ListColumnSpecsResponse

Response message for AutoMl.ListColumnSpecs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_specs** | [**List[ColumnSpec]**](ColumnSpec.md) | The column specs read. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass to ListColumnSpecsRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.list_column_specs_response import ListColumnSpecsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListColumnSpecsResponse from a JSON string
list_column_specs_response_instance = ListColumnSpecsResponse.from_json(json)
# print the JSON string representation of the object
print(ListColumnSpecsResponse.to_json())

# convert the object into a dict
list_column_specs_response_dict = list_column_specs_response_instance.to_dict()
# create an instance of ListColumnSpecsResponse from a dict
list_column_specs_response_from_dict = ListColumnSpecsResponse.from_dict(list_column_specs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


