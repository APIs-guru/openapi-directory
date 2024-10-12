# AppPricePointsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AppPricePoint]**](AppPricePoint.md) |  | 
**included** | [**List[Territory]**](Territory.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_price_points_response import AppPricePointsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppPricePointsResponse from a JSON string
app_price_points_response_instance = AppPricePointsResponse.from_json(json)
# print the JSON string representation of the object
print(AppPricePointsResponse.to_json())

# convert the object into a dict
app_price_points_response_dict = app_price_points_response_instance.to_dict()
# create an instance of AppPricePointsResponse from a dict
app_price_points_response_from_dict = AppPricePointsResponse.from_dict(app_price_points_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


