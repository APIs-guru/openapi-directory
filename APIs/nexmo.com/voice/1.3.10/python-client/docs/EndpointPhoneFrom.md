# EndpointPhoneFrom

Connect to a Phone (PSTN) number

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **str** | The phone number to connect to | 
**type** | **str** | The type of connection. Must be &#x60;phone&#x60; | 

## Example

```python
from openapi_client.models.endpoint_phone_from import EndpointPhoneFrom

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPhoneFrom from a JSON string
endpoint_phone_from_instance = EndpointPhoneFrom.from_json(json)
# print the JSON string representation of the object
print(EndpointPhoneFrom.to_json())

# convert the object into a dict
endpoint_phone_from_dict = endpoint_phone_from_instance.to_dict()
# create an instance of EndpointPhoneFrom from a dict
endpoint_phone_from_from_dict = EndpointPhoneFrom.from_dict(endpoint_phone_from_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


