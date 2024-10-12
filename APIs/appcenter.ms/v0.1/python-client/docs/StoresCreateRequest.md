# StoresCreateRequest

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
from openapi_client.models.stores_create_request import StoresCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StoresCreateRequest from a JSON string
stores_create_request_instance = StoresCreateRequest.from_json(json)
# print the JSON string representation of the object
print(StoresCreateRequest.to_json())

# convert the object into a dict
stores_create_request_dict = stores_create_request_instance.to_dict()
# create an instance of StoresCreateRequest from a dict
stores_create_request_from_dict = StoresCreateRequest.from_dict(stores_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


