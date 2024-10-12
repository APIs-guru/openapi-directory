# ResourceSkusListSkus200Response

The DMS List SKUs operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The uri to fetch the next page of DMS SKUs. Call ListNext() with this to fetch the next page of DMS SKUs. | [optional] 
**value** | [**List[ResourceSkusListSkus200ResponseValueInner]**](ResourceSkusListSkus200ResponseValueInner.md) | The list of SKUs available for the subscription. | 

## Example

```python
from openapi_client.models.resource_skus_list_skus200_response import ResourceSkusListSkus200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSkusListSkus200Response from a JSON string
resource_skus_list_skus200_response_instance = ResourceSkusListSkus200Response.from_json(json)
# print the JSON string representation of the object
print(ResourceSkusListSkus200Response.to_json())

# convert the object into a dict
resource_skus_list_skus200_response_dict = resource_skus_list_skus200_response_instance.to_dict()
# create an instance of ResourceSkusListSkus200Response from a dict
resource_skus_list_skus200_response_from_dict = ResourceSkusListSkus200Response.from_dict(resource_skus_list_skus200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


