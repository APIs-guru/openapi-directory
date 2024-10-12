# ApiOperationListByApi200Response

Paged Operation list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] [readonly] 
**value** | [**List[ApiOperationListByApi200ResponseValueInner]**](ApiOperationListByApi200ResponseValueInner.md) | Page values. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_operation_list_by_api200_response import ApiOperationListByApi200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiOperationListByApi200Response from a JSON string
api_operation_list_by_api200_response_instance = ApiOperationListByApi200Response.from_json(json)
# print the JSON string representation of the object
print(ApiOperationListByApi200Response.to_json())

# convert the object into a dict
api_operation_list_by_api200_response_dict = api_operation_list_by_api200_response_instance.to_dict()
# create an instance of ApiOperationListByApi200Response from a dict
api_operation_list_by_api200_response_from_dict = ApiOperationListByApi200Response.from_dict(api_operation_list_by_api200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


