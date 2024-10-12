# ListTableSpecsResponse

Response message for AutoMl.ListTableSpecs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve next page of results. Pass to ListTableSpecsRequest.page_token to obtain that page. | [optional] 
**table_specs** | [**List[TableSpec]**](TableSpec.md) | The table specs read. | [optional] 

## Example

```python
from openapi_client.models.list_table_specs_response import ListTableSpecsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTableSpecsResponse from a JSON string
list_table_specs_response_instance = ListTableSpecsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTableSpecsResponse.to_json())

# convert the object into a dict
list_table_specs_response_dict = list_table_specs_response_instance.to_dict()
# create an instance of ListTableSpecsResponse from a dict
list_table_specs_response_from_dict = ListTableSpecsResponse.from_dict(list_table_specs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


