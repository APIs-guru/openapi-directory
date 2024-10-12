# OfferingBadge


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**badge_expiry** | [**BadgeExpiry**](BadgeExpiry.md) |  | [optional] 
**description** | **str** |  | [optional] 
**requires_approval** | **bool** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.offering_badge import OfferingBadge

# TODO update the JSON string below
json = "{}"
# create an instance of OfferingBadge from a JSON string
offering_badge_instance = OfferingBadge.from_json(json)
# print the JSON string representation of the object
print(OfferingBadge.to_json())

# convert the object into a dict
offering_badge_dict = offering_badge_instance.to_dict()
# create an instance of OfferingBadge from a dict
offering_badge_from_dict = OfferingBadge.from_dict(offering_badge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


