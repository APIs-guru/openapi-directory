# ClientData

Arbitrary client data that is populated by clients. Duplicate keys and values are allowed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The client specified key of the client data. | [optional] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**value** | **str** | The client specified value of the client data. | [optional] 

## Example

```python
from openapi_client.models.client_data import ClientData

# TODO update the JSON string below
json = "{}"
# create an instance of ClientData from a JSON string
client_data_instance = ClientData.from_json(json)
# print the JSON string representation of the object
print(ClientData.to_json())

# convert the object into a dict
client_data_dict = client_data_instance.to_dict()
# create an instance of ClientData from a dict
client_data_from_dict = ClientData.from_dict(client_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


