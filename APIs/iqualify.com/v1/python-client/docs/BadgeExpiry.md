# BadgeExpiry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_date** | **datetime** |  | [optional] 
**expires** | **bool** |  | [optional] 
**expiry_type** | **str** |  | [optional] 
**timeframe_amount** | **float** |  | [optional] 
**timeframe_unit** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.badge_expiry import BadgeExpiry

# TODO update the JSON string below
json = "{}"
# create an instance of BadgeExpiry from a JSON string
badge_expiry_instance = BadgeExpiry.from_json(json)
# print the JSON string representation of the object
print(BadgeExpiry.to_json())

# convert the object into a dict
badge_expiry_dict = badge_expiry_instance.to_dict()
# create an instance of BadgeExpiry from a dict
badge_expiry_from_dict = BadgeExpiry.from_dict(badge_expiry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


