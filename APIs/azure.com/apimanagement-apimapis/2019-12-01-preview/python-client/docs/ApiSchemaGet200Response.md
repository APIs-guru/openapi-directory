# ApiSchemaGet200Response

Schema Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiSchemaListByApi200ResponseValueInnerProperties**](ApiSchemaListByApi200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_schema_get200_response import ApiSchemaGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiSchemaGet200Response from a JSON string
api_schema_get200_response_instance = ApiSchemaGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiSchemaGet200Response.to_json())

# convert the object into a dict
api_schema_get200_response_dict = api_schema_get200_response_instance.to_dict()
# create an instance of ApiSchemaGet200Response from a dict
api_schema_get200_response_from_dict = ApiSchemaGet200Response.from_dict(api_schema_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


