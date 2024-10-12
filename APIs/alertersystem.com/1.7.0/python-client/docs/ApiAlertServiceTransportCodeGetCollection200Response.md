# ApiAlertServiceTransportCodeGetCollection200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hydramember** | [**List[AlertServiceTransportCodeJsonldGet]**](AlertServiceTransportCodeJsonldGet.md) |  | 
**hydrasearch** | [**ApiAlertLogGetCollection200ResponseHydraSearch**](ApiAlertLogGetCollection200ResponseHydraSearch.md) |  | [optional] 
**hydratotal_items** | **int** |  | [optional] 
**hydraview** | [**ApiAlertLogGetCollection200ResponseHydraView**](ApiAlertLogGetCollection200ResponseHydraView.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_alert_service_transport_code_get_collection200_response import ApiAlertServiceTransportCodeGetCollection200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiAlertServiceTransportCodeGetCollection200Response from a JSON string
api_alert_service_transport_code_get_collection200_response_instance = ApiAlertServiceTransportCodeGetCollection200Response.from_json(json)
# print the JSON string representation of the object
print(ApiAlertServiceTransportCodeGetCollection200Response.to_json())

# convert the object into a dict
api_alert_service_transport_code_get_collection200_response_dict = api_alert_service_transport_code_get_collection200_response_instance.to_dict()
# create an instance of ApiAlertServiceTransportCodeGetCollection200Response from a dict
api_alert_service_transport_code_get_collection200_response_from_dict = ApiAlertServiceTransportCodeGetCollection200Response.from_dict(api_alert_service_transport_code_get_collection200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


