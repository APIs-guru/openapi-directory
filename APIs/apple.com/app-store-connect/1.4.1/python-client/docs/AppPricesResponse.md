# AppPricesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppPrice]**](AppPrice.md) |  | 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_prices_response import AppPricesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppPricesResponse from a JSON string
app_prices_response_instance = AppPricesResponse.from_json(json)
# print the JSON string representation of the object
print(AppPricesResponse.to_json())

# convert the object into a dict
app_prices_response_dict = app_prices_response_instance.to_dict()
# create an instance of AppPricesResponse from a dict
app_prices_response_from_dict = AppPricesResponse.from_dict(app_prices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


