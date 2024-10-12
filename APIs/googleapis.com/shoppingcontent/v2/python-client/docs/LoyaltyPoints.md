# LoyaltyPoints


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of loyalty points program. It is recommended to limit the name to 12 full-width characters or 24 Roman characters. | [optional] 
**points_value** | **str** | The retailer&#39;s loyalty points in absolute value. | [optional] 
**ratio** | **float** | The ratio of a point when converted to currency. Google assumes currency based on Merchant Center settings. If ratio is left out, it defaults to 1.0. | [optional] 

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


