# CreateProductResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UnifiedId**](UnifiedId.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.create_product_response import CreateProductResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProductResponse from a JSON string
create_product_response_instance = CreateProductResponse.from_json(json)
# print the JSON string representation of the object
print(CreateProductResponse.to_json())

# convert the object into a dict
create_product_response_dict = create_product_response_instance.to_dict()
# create an instance of CreateProductResponse from a dict
create_product_response_from_dict = CreateProductResponse.from_dict(create_product_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


