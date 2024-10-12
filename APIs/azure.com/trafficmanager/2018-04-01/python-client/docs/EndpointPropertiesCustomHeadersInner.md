# EndpointPropertiesCustomHeadersInner

Custom header name and value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Header name. | [optional] 
**value** | **str** | Header value. | [optional] 

## Example

```python
from openapi_client.models.endpoint_properties_custom_headers_inner import EndpointPropertiesCustomHeadersInner

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPropertiesCustomHeadersInner from a JSON string
endpoint_properties_custom_headers_inner_instance = EndpointPropertiesCustomHeadersInner.from_json(json)
# print the JSON string representation of the object
print(EndpointPropertiesCustomHeadersInner.to_json())

# convert the object into a dict
endpoint_properties_custom_headers_inner_dict = endpoint_properties_custom_headers_inner_instance.to_dict()
# create an instance of EndpointPropertiesCustomHeadersInner from a dict
endpoint_properties_custom_headers_inner_from_dict = EndpointPropertiesCustomHeadersInner.from_dict(endpoint_properties_custom_headers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


