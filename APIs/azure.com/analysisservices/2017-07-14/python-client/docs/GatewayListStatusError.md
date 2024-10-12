# GatewayListStatusError

Status of gateway is error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**GatewayError**](GatewayError.md) |  | [optional] 

## Example

```python
from openapi_client.models.gateway_list_status_error import GatewayListStatusError

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayListStatusError from a JSON string
gateway_list_status_error_instance = GatewayListStatusError.from_json(json)
# print the JSON string representation of the object
print(GatewayListStatusError.to_json())

# convert the object into a dict
gateway_list_status_error_dict = gateway_list_status_error_instance.to_dict()
# create an instance of GatewayListStatusError from a dict
gateway_list_status_error_from_dict = GatewayListStatusError.from_dict(gateway_list_status_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


