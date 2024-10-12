# PublishedProductListAllOfValues

Published product attributes values, see <a href='/concepts/products.html#focus-on-the-product-values'>Product values</a> section for more details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_code** | [**List[ProductModelListAllOfValuesAttributeCode]**](ProductModelListAllOfValuesAttributeCode.md) |  | [optional] 

## Example

```python
from openapi_client.models.published_product_list_all_of_values import PublishedProductListAllOfValues

# TODO update the JSON string below
json = "{}"
# create an instance of PublishedProductListAllOfValues from a JSON string
published_product_list_all_of_values_instance = PublishedProductListAllOfValues.from_json(json)
# print the JSON string representation of the object
print(PublishedProductListAllOfValues.to_json())

# convert the object into a dict
published_product_list_all_of_values_dict = published_product_list_all_of_values_instance.to_dict()
# create an instance of PublishedProductListAllOfValues from a dict
published_product_list_all_of_values_from_dict = PublishedProductListAllOfValues.from_dict(published_product_list_all_of_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


