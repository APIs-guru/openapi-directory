# AppPricePointAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_price** | **str** |  | [optional] 
**proceeds** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.app_price_point_attributes import AppPricePointAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppPricePointAttributes from a JSON string
app_price_point_attributes_instance = AppPricePointAttributes.from_json(json)
# print the JSON string representation of the object
print(AppPricePointAttributes.to_json())

# convert the object into a dict
app_price_point_attributes_dict = app_price_point_attributes_instance.to_dict()
# create an instance of AppPricePointAttributes from a dict
app_price_point_attributes_from_dict = AppPricePointAttributes.from_dict(app_price_point_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


