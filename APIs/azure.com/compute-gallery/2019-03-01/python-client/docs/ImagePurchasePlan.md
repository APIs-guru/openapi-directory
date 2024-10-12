# ImagePurchasePlan

Describes the gallery Image Definition purchase plan. This is used by marketplace images.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The plan ID. | [optional] 
**product** | **str** | The product ID. | [optional] 
**publisher** | **str** | The publisher ID. | [optional] 

## Example

```python
from openapi_client.models.image_purchase_plan import ImagePurchasePlan

# TODO update the JSON string below
json = "{}"
# create an instance of ImagePurchasePlan from a JSON string
image_purchase_plan_instance = ImagePurchasePlan.from_json(json)
# print the JSON string representation of the object
print(ImagePurchasePlan.to_json())

# convert the object into a dict
image_purchase_plan_dict = image_purchase_plan_instance.to_dict()
# create an instance of ImagePurchasePlan from a dict
image_purchase_plan_from_dict = ImagePurchasePlan.from_dict(image_purchase_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


