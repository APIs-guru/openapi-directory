# Categories

A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_categories** | [**List[Category]**](Category.md) | Optional. Additional categories to describe your business. Categories help your customers find accurate, specific results for services they&#39;re interested in. To keep your business information accurate and live, make sure that you use as few categories as possible to describe your overall core business. Choose categories that are as specific as possible, but representative of your main business. | [optional] 
**primary_category** | [**Category**](Category.md) |  | [optional] 

## Example

```python
from openapi_client.models.categories import Categories

# TODO update the JSON string below
json = "{}"
# create an instance of Categories from a JSON string
categories_instance = Categories.from_json(json)
# print the JSON string representation of the object
print(Categories.to_json())

# convert the object into a dict
categories_dict = categories_instance.to_dict()
# create an instance of Categories from a dict
categories_from_dict = Categories.from_dict(categories_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


