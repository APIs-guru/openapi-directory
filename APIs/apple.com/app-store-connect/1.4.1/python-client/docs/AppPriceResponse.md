# AppPriceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppPrice**](AppPrice.md) |  | 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.app_price_response import AppPriceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppPriceResponse from a JSON string
app_price_response_instance = AppPriceResponse.from_json(json)
# print the JSON string representation of the object
print(AppPriceResponse.to_json())

# convert the object into a dict
app_price_response_dict = app_price_response_instance.to_dict()
# create an instance of AppPriceResponse from a dict
app_price_response_from_dict = AppPriceResponse.from_dict(app_price_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


