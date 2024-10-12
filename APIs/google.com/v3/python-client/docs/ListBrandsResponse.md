# ListBrandsResponse

Response message for BrandService.ListBrands.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brands** | [**List[Brand]**](Brand.md) | A list of all brands associated with the Hotel Center account being queried. | [optional] 

## Example

```python
from openapi_client.models.list_brands_response import ListBrandsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBrandsResponse from a JSON string
list_brands_response_instance = ListBrandsResponse.from_json(json)
# print the JSON string representation of the object
print(ListBrandsResponse.to_json())

# convert the object into a dict
list_brands_response_dict = list_brands_response_instance.to_dict()
# create an instance of ListBrandsResponse from a dict
list_brands_response_from_dict = ListBrandsResponse.from_dict(list_brands_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


