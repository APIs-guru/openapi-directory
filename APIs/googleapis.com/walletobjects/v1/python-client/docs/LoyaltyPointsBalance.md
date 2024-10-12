# LoyaltyPointsBalance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**double** | **float** | The double form of a balance. Only one of these subtypes (string, int, double, money) should be populated. | [optional] 
**int** | **int** | The integer form of a balance. Only one of these subtypes (string, int, double, money) should be populated. | [optional] 
**money** | [**Money**](Money.md) |  | [optional] 
**string** | **str** | The string form of a balance. Only one of these subtypes (string, int, double, money) should be populated. | [optional] 

## Example

```python
from openapi_client.models.loyalty_points_balance import LoyaltyPointsBalance

# TODO update the JSON string below
json = "{}"
# create an instance of LoyaltyPointsBalance from a JSON string
loyalty_points_balance_instance = LoyaltyPointsBalance.from_json(json)
# print the JSON string representation of the object
print(LoyaltyPointsBalance.to_json())

# convert the object into a dict
loyalty_points_balance_dict = loyalty_points_balance_instance.to_dict()
# create an instance of LoyaltyPointsBalance from a dict
loyalty_points_balance_from_dict = LoyaltyPointsBalance.from_dict(loyalty_points_balance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


