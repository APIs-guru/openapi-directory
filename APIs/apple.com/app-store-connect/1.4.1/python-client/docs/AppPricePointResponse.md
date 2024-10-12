# AppPricePointResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppPricePoint**](AppPricePoint.md) |  | 
**included** | [**List[Territory]**](Territory.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.app_price_point_response import AppPricePointResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppPricePointResponse from a JSON string
app_price_point_response_instance = AppPricePointResponse.from_json(json)
# print the JSON string representation of the object
print(AppPricePointResponse.to_json())

# convert the object into a dict
app_price_point_response_dict = app_price_point_response_instance.to_dict()
# create an instance of AppPricePointResponse from a dict
app_price_point_response_from_dict = AppPricePointResponse.from_dict(app_price_point_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


