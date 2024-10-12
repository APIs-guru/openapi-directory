# CreativeFieldValuesListResponse

Creative Field Value List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative_field_values** | [**List[CreativeFieldValue]**](CreativeFieldValue.md) | Creative field value collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#creativeFieldValuesListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.creative_field_values_list_response import CreativeFieldValuesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeFieldValuesListResponse from a JSON string
creative_field_values_list_response_instance = CreativeFieldValuesListResponse.from_json(json)
# print the JSON string representation of the object
print(CreativeFieldValuesListResponse.to_json())

# convert the object into a dict
creative_field_values_list_response_dict = creative_field_values_list_response_instance.to_dict()
# create an instance of CreativeFieldValuesListResponse from a dict
creative_field_values_list_response_from_dict = CreativeFieldValuesListResponse.from_dict(creative_field_values_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


