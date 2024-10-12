# ListMetadataImportsResponse

Response message for DataprocMetastore.ListMetadataImports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata_imports** | [**List[MetadataImport]**](MetadataImport.md) | The imports in the specified service. | [optional] 
**next_page_token** | **str** | A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_metadata_imports_response import ListMetadataImportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMetadataImportsResponse from a JSON string
list_metadata_imports_response_instance = ListMetadataImportsResponse.from_json(json)
# print the JSON string representation of the object
print(ListMetadataImportsResponse.to_json())

# convert the object into a dict
list_metadata_imports_response_dict = list_metadata_imports_response_instance.to_dict()
# create an instance of ListMetadataImportsResponse from a dict
list_metadata_imports_response_from_dict = ListMetadataImportsResponse.from_dict(list_metadata_imports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


