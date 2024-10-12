# AvailableProductsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | **currency** in which to display product pricing - default: &#x60;&#39;USD&#39;&#x60;  | [optional] 
**end_date** | **str** | **end date** of the date range to search within (must be in the future) | [optional] 
**num_adults** | **int** | **number of adult travelers** who wish to participate - default: &#x60;1&#x60;  | [optional] 
**product_codes** | **List[str]** | **array of unique alphanumeric product identifiers** specifying which products to find the availability of - maximum: &#x60;50&#x60;  | [optional] 
**start_date** | **str** | **start date** of the date range to search within (must be in the future) | [optional] 

## Example

```python
from openapi_client.models.available_products_request import AvailableProductsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableProductsRequest from a JSON string
available_products_request_instance = AvailableProductsRequest.from_json(json)
# print the JSON string representation of the object
print(AvailableProductsRequest.to_json())

# convert the object into a dict
available_products_request_dict = available_products_request_instance.to_dict()
# create an instance of AvailableProductsRequest from a dict
available_products_request_from_dict = AvailableProductsRequest.from_dict(available_products_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


