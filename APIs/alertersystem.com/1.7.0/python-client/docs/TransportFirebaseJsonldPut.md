# TransportFirebaseJsonldPut

The TransportFirebase resource is a collection of transports that carry dispatched alerts to the external Firebase service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**firebase_password** | **str** | The password for the Firebase service. Stored in encrypted format. | 
**firebase_username** | **str** | The username for the Firebase service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_firebase_jsonld_put import TransportFirebaseJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportFirebaseJsonldPut from a JSON string
transport_firebase_jsonld_put_instance = TransportFirebaseJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportFirebaseJsonldPut.to_json())

# convert the object into a dict
transport_firebase_jsonld_put_dict = transport_firebase_jsonld_put_instance.to_dict()
# create an instance of TransportFirebaseJsonldPut from a dict
transport_firebase_jsonld_put_from_dict = TransportFirebaseJsonldPut.from_dict(transport_firebase_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


