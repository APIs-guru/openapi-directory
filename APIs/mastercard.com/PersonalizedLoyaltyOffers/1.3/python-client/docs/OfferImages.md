# OfferImages


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alt_text** | **str** | Description of a picture or graphic that may be displayed along with the offer information. | [optional] 
**description** | **str** | Verbal details of the image, may be used for accessiblity. | [optional] 
**image_url** | **str** | A picture or graphic that may be displayed along with the offer information. | [optional] 

## Example

```python
from openapi_client.models.offer_images import OfferImages

# TODO update the JSON string below
json = "{}"
# create an instance of OfferImages from a JSON string
offer_images_instance = OfferImages.from_json(json)
# print the JSON string representation of the object
print(OfferImages.to_json())

# convert the object into a dict
offer_images_dict = offer_images_instance.to_dict()
# create an instance of OfferImages from a dict
offer_images_from_dict = OfferImages.from_dict(offer_images_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


