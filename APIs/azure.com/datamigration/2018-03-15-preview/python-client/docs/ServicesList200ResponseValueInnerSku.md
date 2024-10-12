# ServicesList200ResponseValueInnerSku

An Azure SKU instance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | The capacity of the SKU, if it supports scaling | [optional] 
**family** | **str** | The SKU family, used when the service has multiple performance classes within a tier, such as &#39;A&#39;, &#39;D&#39;, etc. for virtual machines | [optional] 
**name** | **str** | The unique name of the SKU, such as &#39;P3&#39; | [optional] 
**size** | **str** | The size of the SKU, used when the name alone does not denote a service size or when a SKU has multiple performance classes within a family, e.g. &#39;A1&#39; for virtual machines | [optional] 
**tier** | **str** | The tier of the SKU, such as &#39;Free&#39;, &#39;Basic&#39;, &#39;Standard&#39;, or &#39;Premium&#39; | [optional] 

## Example

```python
from openapi_client.models.services_list200_response_value_inner_sku import ServicesList200ResponseValueInnerSku

# TODO update the JSON string below
json = "{}"
# create an instance of ServicesList200ResponseValueInnerSku from a JSON string
services_list200_response_value_inner_sku_instance = ServicesList200ResponseValueInnerSku.from_json(json)
# print the JSON string representation of the object
print(ServicesList200ResponseValueInnerSku.to_json())

# convert the object into a dict
services_list200_response_value_inner_sku_dict = services_list200_response_value_inner_sku_instance.to_dict()
# create an instance of ServicesList200ResponseValueInnerSku from a dict
services_list200_response_value_inner_sku_from_dict = ServicesList200ResponseValueInnerSku.from_dict(services_list200_response_value_inner_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


