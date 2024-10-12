# PrivateCreateStoreRequest

create the store through private API. Used by UI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intune_details** | [**PrivateCreateStoreRequestIntuneDetails**](PrivateCreateStoreRequestIntuneDetails.md) |  | [optional] 
**name** | **str** | name of the store. | [optional] 
**type** | **str** | store Type | [optional] 

## Example

```python
from openapi_client.models.private_create_store_request import PrivateCreateStoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateCreateStoreRequest from a JSON string
private_create_store_request_instance = PrivateCreateStoreRequest.from_json(json)
# print the JSON string representation of the object
print(PrivateCreateStoreRequest.to_json())

# convert the object into a dict
private_create_store_request_dict = private_create_store_request_instance.to_dict()
# create an instance of PrivateCreateStoreRequest from a dict
private_create_store_request_from_dict = PrivateCreateStoreRequest.from_dict(private_create_store_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


