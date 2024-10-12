# PromotionPromotionStatus

The status of the promotion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **str** | Date on which the promotion has been created in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example \&quot;2020-01-02T09:00:00+01:00\&quot; or \&quot;2020-01-02T09:00:00Z\&quot; | [optional] 
**destination_statuses** | [**List[PromotionPromotionStatusDestinationStatus]**](PromotionPromotionStatusDestinationStatus.md) | The intended destinations for the promotion. | [optional] 
**last_update_date** | **str** | Date on which the promotion status has been last updated in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example \&quot;2020-01-02T09:00:00+01:00\&quot; or \&quot;2020-01-02T09:00:00Z\&quot; | [optional] 
**promotion_issue** | [**List[PromotionPromotionStatusPromotionIssue]**](PromotionPromotionStatusPromotionIssue.md) | A list of issues associated with the promotion. | [optional] 

## Example

```python
from openapi_client.models.promotion_promotion_status import PromotionPromotionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of PromotionPromotionStatus from a JSON string
promotion_promotion_status_instance = PromotionPromotionStatus.from_json(json)
# print the JSON string representation of the object
print(PromotionPromotionStatus.to_json())

# convert the object into a dict
promotion_promotion_status_dict = promotion_promotion_status_instance.to_dict()
# create an instance of PromotionPromotionStatus from a dict
promotion_promotion_status_from_dict = PromotionPromotionStatus.from_dict(promotion_promotion_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


