# ExternalStoreRequest

ExternalStoreRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intune_details** | [**StoresCreateRequestIntuneDetails**](StoresCreateRequestIntuneDetails.md) |  | [optional] 
**name** | **str** | name of the store. In case of googleplay, and Apple store this is fixed to Production. | [optional] 
**service_connection_id** | **str** | Id for the shared service connection. In case of Apple AppStore, this connection will be used to create and connect to the Apple AppStore in Mobile Center. | [optional] 
**track** | **str** | track of the store. Can be production, alpha &amp; beta for googleplay. Can be production, testflight-internal &amp; testflight-external for Apple Store. | [optional] 
**type** | **str** | store Type | [optional] 

## Example

```python
from openapi_client.models.external_store_request import ExternalStoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalStoreRequest from a JSON string
external_store_request_instance = ExternalStoreRequest.from_json(json)
# print the JSON string representation of the object
print(ExternalStoreRequest.to_json())

# convert the object into a dict
external_store_request_dict = external_store_request_instance.to_dict()
# create an instance of ExternalStoreRequest from a dict
external_store_request_from_dict = ExternalStoreRequest.from_dict(external_store_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


