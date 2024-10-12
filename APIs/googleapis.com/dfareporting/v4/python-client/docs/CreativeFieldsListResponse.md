# CreativeFieldsListResponse

Creative Field List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative_fields** | [**List[CreativeField]**](CreativeField.md) | Creative field collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#creativeFieldsListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.creative_fields_list_response import CreativeFieldsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeFieldsListResponse from a JSON string
creative_fields_list_response_instance = CreativeFieldsListResponse.from_json(json)
# print the JSON string representation of the object
print(CreativeFieldsListResponse.to_json())

# convert the object into a dict
creative_fields_list_response_dict = creative_fields_list_response_instance.to_dict()
# create an instance of CreativeFieldsListResponse from a dict
creative_fields_list_response_from_dict = CreativeFieldsListResponse.from_dict(creative_fields_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


