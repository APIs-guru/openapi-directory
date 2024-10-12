# LoyaltyPoints


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | [**LoyaltyPointsBalance**](LoyaltyPointsBalance.md) |  | [optional] 
**label** | **str** | The loyalty points label, such as \&quot;Points\&quot;. Recommended maximum length is 9 characters. | [optional] 
**localized_label** | [**LocalizedString**](LocalizedString.md) |  | [optional] 

## Example

```python
from openapi_client.models.loyalty_points import LoyaltyPoints

# TODO update the JSON string below
json = "{}"
# create an instance of LoyaltyPoints from a JSON string
loyalty_points_instance = LoyaltyPoints.from_json(json)
# print the JSON string representation of the object
print(LoyaltyPoints.to_json())

# convert the object into a dict
loyalty_points_dict = loyalty_points_instance.to_dict()
# create an instance of LoyaltyPoints from a dict
loyalty_points_from_dict = LoyaltyPoints.from_dict(loyalty_points_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


