# ServicesList200ResponseValueInner

A Data Migration Service resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | HTTP strong entity tag value. Ignored if submitted | [optional] 
**kind** | **str** | The resource kind. Only &#39;vm&#39; (the default) is supported. | [optional] 
**properties** | [**ServicesList200ResponseValueInnerProperties**](ServicesList200ResponseValueInnerProperties.md) |  | [optional] 
**sku** | [**ServicesList200ResponseValueInnerSku**](ServicesList200ResponseValueInnerSku.md) |  | [optional] 

## Example

```python
from openapi_client.models.services_list200_response_value_inner import ServicesList200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesList200ResponseValueInner from a JSON string
services_list200_response_value_inner_instance = ServicesList200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(ServicesList200ResponseValueInner.to_json())

# convert the object into a dict
services_list200_response_value_inner_dict = services_list200_response_value_inner_instance.to_dict()
# create an instance of ServicesList200ResponseValueInner from a dict
services_list200_response_value_inner_from_dict = ServicesList200ResponseValueInner.from_dict(services_list200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


