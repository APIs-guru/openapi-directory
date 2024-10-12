# Attributes

Attributes of the product. For more information, see https://support.google.com/manufacturers/answer/6124116.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_image_link** | [**List[Image]**](Image.md) | The additional images of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#addlimage. | [optional] 
**age_group** | **str** | The target age group of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#agegroup. | [optional] 
**brand** | **str** | The brand name of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#brand. | [optional] 
**capacity** | [**Capacity**](Capacity.md) |  | [optional] 
**certification** | [**List[GoogleShoppingManufacturersV1ProductCertification]**](GoogleShoppingManufacturersV1ProductCertification.md) | Optional. List of certifications claimed by this product. | [optional] 
**color** | **str** | The color of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#color. | [optional] 
**count** | [**Count**](Count.md) |  | [optional] 
**description** | **str** | The description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#description. | [optional] 
**disclosure_date** | **str** | The disclosure date of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#disclosure. | [optional] 
**excluded_destination** | **List[str]** | A list of excluded destinations such as \&quot;ClientExport\&quot;, \&quot;ClientShoppingCatalog\&quot; or \&quot;PartnerShoppingCatalog\&quot;. For more information, see https://support.google.com/manufacturers/answer/7443550 | [optional] 
**feature_description** | [**List[FeatureDescription]**](FeatureDescription.md) | The rich format description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc. | [optional] 
**flavor** | **str** | The flavor of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#flavor. | [optional] 
**format** | **str** | The format of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#format. | [optional] 
**gender** | **str** | The target gender of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#gender. | [optional] 
**grocery** | [**Grocery**](Grocery.md) |  | [optional] 
**gtin** | **List[str]** | The Global Trade Item Number (GTIN) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#gtin. | [optional] 
**image_link** | [**Image**](Image.md) |  | [optional] 
**included_destination** | **List[str]** | A list of included destinations such as \&quot;ClientExport\&quot;, \&quot;ClientShoppingCatalog\&quot; or \&quot;PartnerShoppingCatalog\&quot;. For more information, see https://support.google.com/manufacturers/answer/7443550 | [optional] 
**item_group_id** | **str** | The item group id of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#itemgroupid. | [optional] 
**material** | **str** | The material of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#material. | [optional] 
**mpn** | **str** | The Manufacturer Part Number (MPN) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#mpn. | [optional] 
**nutrition** | [**Nutrition**](Nutrition.md) |  | [optional] 
**pattern** | **str** | The pattern of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#pattern. | [optional] 
**product_detail** | [**List[ProductDetail]**](ProductDetail.md) | The details of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail. | [optional] 
**product_highlight** | **List[str]** | The product highlights. For more information, see https://support.google.com/manufacturers/answer/10066942 | [optional] 
**product_line** | **str** | The name of the group of products related to the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productline. | [optional] 
**product_name** | **str** | The canonical name of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productname. | [optional] 
**product_page_url** | **str** | The URL of the detail page of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productpage. | [optional] 
**product_type** | **List[str]** | The type or category of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#producttype. | [optional] 
**release_date** | **str** | The release date of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#release. | [optional] 
**rich_product_content** | **List[str]** | Rich product content. For more information, see https://support.google.com/manufacturers/answer/9389865 | [optional] 
**scent** | **str** | The scent of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#scent. | [optional] 
**size** | **str** | The size of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#size. | [optional] 
**size_system** | **str** | The size system of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#sizesystem. | [optional] 
**size_type** | **List[str]** | The size type of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#sizetype. | [optional] 
**suggested_retail_price** | [**Price**](Price.md) |  | [optional] 
**target_client_id** | **str** | The target client id. Should only be used in the accounts of the data partners. For more information, see https://support.google.com/manufacturers/answer/10857344 | [optional] 
**theme** | **str** | The theme of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#theme. | [optional] 
**title** | **str** | The title of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#title. | [optional] 
**video_link** | **List[str]** | The videos of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#video. | [optional] 
**virtual_model_link** | **str** | Virtual Model (3d) asset link. | [optional] 

## Example

```python
from openapi_client.models.attributes import Attributes

# TODO update the JSON string below
json = "{}"
# create an instance of Attributes from a JSON string
attributes_instance = Attributes.from_json(json)
# print the JSON string representation of the object
print(Attributes.to_json())

# convert the object into a dict
attributes_dict = attributes_instance.to_dict()
# create an instance of Attributes from a dict
attributes_from_dict = Attributes.from_dict(attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


