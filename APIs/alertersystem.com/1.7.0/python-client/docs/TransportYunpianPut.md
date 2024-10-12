# TransportYunpianPut

The TransportYunpian resource is a collection of transports that carry dispatched alerts to the external Yunpian service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**transport_name** | **str** | The name of the transport. | 
**yunpian_api_key** | **str** | The API key for the Yunpian service. Stored in encrypted format. | 

## Example

```python
from openapi_client.models.transport_yunpian_put import TransportYunpianPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportYunpianPut from a JSON string
transport_yunpian_put_instance = TransportYunpianPut.from_json(json)
# print the JSON string representation of the object
print(TransportYunpianPut.to_json())

# convert the object into a dict
transport_yunpian_put_dict = transport_yunpian_put_instance.to_dict()
# create an instance of TransportYunpianPut from a dict
transport_yunpian_put_from_dict = TransportYunpianPut.from_dict(transport_yunpian_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


