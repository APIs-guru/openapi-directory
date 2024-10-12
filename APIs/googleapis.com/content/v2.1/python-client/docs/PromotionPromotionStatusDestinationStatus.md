# PromotionPromotionStatusDestinationStatus

The destination status of the promotion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | **str** | The name of the destination. | [optional] 
**status** | **str** | The status for the specified destination. | [optional] 

## Example

```python
from openapi_client.models.promotion_promotion_status_destination_status import PromotionPromotionStatusDestinationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of PromotionPromotionStatusDestinationStatus from a JSON string
promotion_promotion_status_destination_status_instance = PromotionPromotionStatusDestinationStatus.from_json(json)
# print the JSON string representation of the object
print(PromotionPromotionStatusDestinationStatus.to_json())

# convert the object into a dict
promotion_promotion_status_destination_status_dict = promotion_promotion_status_destination_status_instance.to_dict()
# create an instance of PromotionPromotionStatusDestinationStatus from a dict
promotion_promotion_status_destination_status_from_dict = PromotionPromotionStatusDestinationStatus.from_dict(promotion_promotion_status_destination_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


