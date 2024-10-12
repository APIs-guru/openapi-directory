# ConnectCarrierResponseBody

A connect account response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_id** | **str** | A string that uniquely identifies the carrier | 

## Example

```python
from openapi_client.models.connect_carrier_response_body import ConnectCarrierResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectCarrierResponseBody from a JSON string
connect_carrier_response_body_instance = ConnectCarrierResponseBody.from_json(json)
# print the JSON string representation of the object
print(ConnectCarrierResponseBody.to_json())

# convert the object into a dict
connect_carrier_response_body_dict = connect_carrier_response_body_instance.to_dict()
# create an instance of ConnectCarrierResponseBody from a dict
connect_carrier_response_body_from_dict = ConnectCarrierResponseBody.from_dict(connect_carrier_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


