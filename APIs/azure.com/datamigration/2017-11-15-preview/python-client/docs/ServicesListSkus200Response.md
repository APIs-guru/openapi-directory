# ServicesListSkus200Response

OData page of available SKUs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to load the next page of service SKUs | [optional] 
**value** | [**List[ServicesListSkus200ResponseValueInner]**](ServicesListSkus200ResponseValueInner.md) | List of service SKUs | [optional] 

## Example

```python
from openapi_client.models.services_list_skus200_response import ServicesListSkus200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesListSkus200Response from a JSON string
services_list_skus200_response_instance = ServicesListSkus200Response.from_json(json)
# print the JSON string representation of the object
print(ServicesListSkus200Response.to_json())

# convert the object into a dict
services_list_skus200_response_dict = services_list_skus200_response_instance.to_dict()
# create an instance of ServicesListSkus200Response from a dict
services_list_skus200_response_from_dict = ServicesListSkus200Response.from_dict(services_list_skus200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


