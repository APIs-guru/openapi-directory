# ApiSchemaCreateOrUpdateRequest

Schema Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiSchemaCreateOrUpdateRequestProperties**](ApiSchemaCreateOrUpdateRequestProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_schema_create_or_update_request import ApiSchemaCreateOrUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiSchemaCreateOrUpdateRequest from a JSON string
api_schema_create_or_update_request_instance = ApiSchemaCreateOrUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(ApiSchemaCreateOrUpdateRequest.to_json())

# convert the object into a dict
api_schema_create_or_update_request_dict = api_schema_create_or_update_request_instance.to_dict()
# create an instance of ApiSchemaCreateOrUpdateRequest from a dict
api_schema_create_or_update_request_from_dict = ApiSchemaCreateOrUpdateRequest.from_dict(api_schema_create_or_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


