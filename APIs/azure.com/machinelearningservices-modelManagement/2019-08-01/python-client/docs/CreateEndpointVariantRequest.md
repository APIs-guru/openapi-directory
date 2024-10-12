# CreateEndpointVariantRequest

The Variant properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_default** | **bool** | Is this the default variant. | [optional] 
**traffic_percentile** | **float** | The amount of traffic variant receives. | [optional] 
**type** | **str** | The type of the variant. | [optional] 

## Example

```python
from openapi_client.models.create_endpoint_variant_request import CreateEndpointVariantRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateEndpointVariantRequest from a JSON string
create_endpoint_variant_request_instance = CreateEndpointVariantRequest.from_json(json)
# print the JSON string representation of the object
print(CreateEndpointVariantRequest.to_json())

# convert the object into a dict
create_endpoint_variant_request_dict = create_endpoint_variant_request_instance.to_dict()
# create an instance of CreateEndpointVariantRequest from a dict
create_endpoint_variant_request_from_dict = CreateEndpointVariantRequest.from_dict(create_endpoint_variant_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


