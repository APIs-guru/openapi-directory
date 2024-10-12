# TransportSimpleTextinJsonldPut

The TransportSimpleTextin resource is a collection of transports that carry dispatched alerts to the external SimpleTextin service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**simple_textin_api_key** | **str** | The API key for the SimpleTextin service. Stored in encrypted format. | 
**simple_textin_from** | **str** | The from value for the SimpleTextin service. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_simple_textin_jsonld_put import TransportSimpleTextinJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSimpleTextinJsonldPut from a JSON string
transport_simple_textin_jsonld_put_instance = TransportSimpleTextinJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportSimpleTextinJsonldPut.to_json())

# convert the object into a dict
transport_simple_textin_jsonld_put_dict = transport_simple_textin_jsonld_put_instance.to_dict()
# create an instance of TransportSimpleTextinJsonldPut from a dict
transport_simple_textin_jsonld_put_from_dict = TransportSimpleTextinJsonldPut.from_dict(transport_simple_textin_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


