# Product

Product data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**Attributes**](Attributes.md) |  | [optional] 
**content_language** | **str** | The content language of the product as a two-letter ISO 639-1 language code (for example, en). | [optional] 
**destination_statuses** | [**List[DestinationStatus]**](DestinationStatus.md) | The status of the destinations. | [optional] 
**issues** | [**List[Issue]**](Issue.md) | A server-generated list of issues associated with the product. | [optional] 
**name** | **str** | Name in the format &#x60;{target_country}:{content_language}:{product_id}&#x60;. &#x60;target_country&#x60; - The target country of the product as a CLDR territory code (for example, US). &#x60;content_language&#x60; - The content language of the product as a two-letter ISO 639-1 language code (for example, en). &#x60;product_id&#x60; - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id. | [optional] 
**parent** | **str** | Parent ID in the format &#x60;accounts/{account_id}&#x60;. &#x60;account_id&#x60; - The ID of the Manufacturer Center account. | [optional] 
**product_id** | **str** | The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id. | [optional] 
**target_country** | **str** | The target country of the product as a CLDR territory code (for example, US). | [optional] 

## Example

```python
from openapi_client.models.product import Product

# TODO update the JSON string below
json = "{}"
# create an instance of Product from a JSON string
product_instance = Product.from_json(json)
# print the JSON string representation of the object
print(Product.to_json())

# convert the object into a dict
product_dict = product_instance.to_dict()
# create an instance of Product from a dict
product_from_dict = Product.from_dict(product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


