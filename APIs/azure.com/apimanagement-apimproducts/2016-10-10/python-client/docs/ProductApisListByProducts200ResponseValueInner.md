# ProductApisListByProducts200ResponseValueInner

API details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | API identifier path: /apis/{apiId} | [optional] [readonly] 
**name** | **str** | API name. | 
**path** | **str** | Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API. | 
**protocols** | **List[str]** | Describes on which protocols the operations in this API can be invoked. | 
**service_url** | **str** | Absolute URL of the backend service implementing this API. | 

## Example

```python
from openapi_client.models.product_apis_list_by_products200_response_value_inner import ProductApisListByProducts200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductApisListByProducts200ResponseValueInner from a JSON string
product_apis_list_by_products200_response_value_inner_instance = ProductApisListByProducts200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(ProductApisListByProducts200ResponseValueInner.to_json())

# convert the object into a dict
product_apis_list_by_products200_response_value_inner_dict = product_apis_list_by_products200_response_value_inner_instance.to_dict()
# create an instance of ProductApisListByProducts200ResponseValueInner from a dict
product_apis_list_by_products200_response_value_inner_from_dict = ProductApisListByProducts200ResponseValueInner.from_dict(product_apis_list_by_products200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


