# Discount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percent_value** | **float** | Percent Value | [optional] 
**type** | **str** | Type | [optional] 
**value** | **float** | Value | [optional] 

## Example

```python
from openapi_client.models.discount import Discount

# TODO update the JSON string below
json = "{}"
# create an instance of Discount from a JSON string
discount_instance = Discount.from_json(json)
# print the JSON string representation of the object
print(Discount.to_json())

# convert the object into a dict
discount_dict = discount_instance.to_dict()
# create an instance of Discount from a dict
discount_from_dict = Discount.from_dict(discount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


