# ServicesGet200Response

A Data Migration Service resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | HTTP strong entity tag value. Ignored if submitted | [optional] 
**kind** | **str** | The resource kind. Only &#39;vm&#39; (the default) is supported. | [optional] 
**properties** | [**ServicesList200ResponseValueInnerProperties**](ServicesList200ResponseValueInnerProperties.md) |  | [optional] 
**sku** | [**ServicesList200ResponseValueInnerSku**](ServicesList200ResponseValueInnerSku.md) |  | [optional] 
**location** | **str** | Resource location. | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.services_get200_response import ServicesGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesGet200Response from a JSON string
services_get200_response_instance = ServicesGet200Response.from_json(json)
# print the JSON string representation of the object
print(ServicesGet200Response.to_json())

# convert the object into a dict
services_get200_response_dict = services_get200_response_instance.to_dict()
# create an instance of ServicesGet200Response from a dict
services_get200_response_from_dict = ServicesGet200Response.from_dict(services_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


