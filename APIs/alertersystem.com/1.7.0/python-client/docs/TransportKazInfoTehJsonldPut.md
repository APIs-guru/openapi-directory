# TransportKazInfoTehJsonldPut

The TransportKazInfoTeh resource is a collection of transports that carry dispatched alerts to the external KazInfoTeh service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**kaz_info_teh_from** | **str** | The from value for the KazInfoTeh service. | 
**kaz_info_teh_password** | **str** | The password for the KazInfoTeh service. Stored in encrypted format. | 
**kaz_info_teh_username** | **str** | The username for the KazInfoTeh service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_kaz_info_teh_jsonld_put import TransportKazInfoTehJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportKazInfoTehJsonldPut from a JSON string
transport_kaz_info_teh_jsonld_put_instance = TransportKazInfoTehJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportKazInfoTehJsonldPut.to_json())

# convert the object into a dict
transport_kaz_info_teh_jsonld_put_dict = transport_kaz_info_teh_jsonld_put_instance.to_dict()
# create an instance of TransportKazInfoTehJsonldPut from a dict
transport_kaz_info_teh_jsonld_put_from_dict = TransportKazInfoTehJsonldPut.from_dict(transport_kaz_info_teh_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


