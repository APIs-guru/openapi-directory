# GetOffersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**products** | [**List[Product]**](Product.md) | The returned list of products. | [optional] 

## Example

```python
from openapi_client.models.get_offers_response import GetOffersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetOffersResponse from a JSON string
get_offers_response_instance = GetOffersResponse.from_json(json)
# print the JSON string representation of the object
print(GetOffersResponse.to_json())

# convert the object into a dict
get_offers_response_dict = get_offers_response_instance.to_dict()
# create an instance of GetOffersResponse from a dict
get_offers_response_from_dict = GetOffersResponse.from_dict(get_offers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


