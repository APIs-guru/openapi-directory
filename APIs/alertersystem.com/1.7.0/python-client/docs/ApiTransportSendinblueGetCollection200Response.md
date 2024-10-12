# ApiTransportSendinblueGetCollection200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hydramember** | [**List[TransportSendinblueJsonldGet]**](TransportSendinblueJsonldGet.md) |  | 
**hydrasearch** | [**ApiAlertLogGetCollection200ResponseHydraSearch**](ApiAlertLogGetCollection200ResponseHydraSearch.md) |  | [optional] 
**hydratotal_items** | **int** |  | [optional] 
**hydraview** | [**ApiAlertLogGetCollection200ResponseHydraView**](ApiAlertLogGetCollection200ResponseHydraView.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_transport_sendinblue_get_collection200_response import ApiTransportSendinblueGetCollection200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTransportSendinblueGetCollection200Response from a JSON string
api_transport_sendinblue_get_collection200_response_instance = ApiTransportSendinblueGetCollection200Response.from_json(json)
# print the JSON string representation of the object
print(ApiTransportSendinblueGetCollection200Response.to_json())

# convert the object into a dict
api_transport_sendinblue_get_collection200_response_dict = api_transport_sendinblue_get_collection200_response_instance.to_dict()
# create an instance of ApiTransportSendinblueGetCollection200Response from a dict
api_transport_sendinblue_get_collection200_response_from_dict = ApiTransportSendinblueGetCollection200Response.from_dict(api_transport_sendinblue_get_collection200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


