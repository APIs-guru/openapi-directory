# PrivateIntuneStoreRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_category** | [**StoresCreateRequestIntuneDetailsAppCategory**](StoresCreateRequestIntuneDetailsAppCategory.md) |  | [optional] 
**target_audience** | [**StoresCreateRequestIntuneDetailsTargetAudience**](StoresCreateRequestIntuneDetailsTargetAudience.md) |  | [optional] 
**tenant_id** | **str** | tenant id of the intune store | [optional] 

## Example

```python
from openapi_client.models.private_intune_store_request import PrivateIntuneStoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateIntuneStoreRequest from a JSON string
private_intune_store_request_instance = PrivateIntuneStoreRequest.from_json(json)
# print the JSON string representation of the object
print(PrivateIntuneStoreRequest.to_json())

# convert the object into a dict
private_intune_store_request_dict = private_intune_store_request_instance.to_dict()
# create an instance of PrivateIntuneStoreRequest from a dict
private_intune_store_request_from_dict = PrivateIntuneStoreRequest.from_dict(private_intune_store_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


