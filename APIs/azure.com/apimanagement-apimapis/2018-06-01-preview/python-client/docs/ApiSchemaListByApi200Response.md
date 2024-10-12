# ApiSchemaListByApi200Response

The response of the list schema operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] [readonly] 
**value** | [**List[ApiSchemaListByApi200ResponseValueInner]**](ApiSchemaListByApi200ResponseValueInner.md) | Api Schema Contract value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_schema_list_by_api200_response import ApiSchemaListByApi200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiSchemaListByApi200Response from a JSON string
api_schema_list_by_api200_response_instance = ApiSchemaListByApi200Response.from_json(json)
# print the JSON string representation of the object
print(ApiSchemaListByApi200Response.to_json())

# convert the object into a dict
api_schema_list_by_api200_response_dict = api_schema_list_by_api200_response_instance.to_dict()
# create an instance of ApiSchemaListByApi200Response from a dict
api_schema_list_by_api200_response_from_dict = ApiSchemaListByApi200Response.from_dict(api_schema_list_by_api200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


