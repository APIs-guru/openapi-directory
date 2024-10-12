# TransportSendinbluePut

The TransportSendinblue resource is a collection of transports that carry dispatched alerts to the external Sendinblue service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**sendinblue_api_key** | **str** | The API key for the Sendinblue service. Stored in encrypted format. | 
**sendinblue_sender_phone** | **str** | The sender phone number for the Sendinblue service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_sendinblue_put import TransportSendinbluePut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportSendinbluePut from a JSON string
transport_sendinblue_put_instance = TransportSendinbluePut.from_json(json)
# print the JSON string representation of the object
print(TransportSendinbluePut.to_json())

# convert the object into a dict
transport_sendinblue_put_dict = transport_sendinblue_put_instance.to_dict()
# create an instance of TransportSendinbluePut from a dict
transport_sendinblue_put_from_dict = TransportSendinbluePut.from_dict(transport_sendinblue_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


