# IntuneStoreRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_category** | [**StoresCreateRequestIntuneDetailsAppCategory**](StoresCreateRequestIntuneDetailsAppCategory.md) |  | [optional] 
**secret_json** | [**StoresCreateRequestIntuneDetailsSecretJson**](StoresCreateRequestIntuneDetailsSecretJson.md) |  | [optional] 
**target_audience** | [**StoresCreateRequestIntuneDetailsTargetAudience**](StoresCreateRequestIntuneDetailsTargetAudience.md) |  | [optional] 
**tenant_id** | **str** | tenant id of the intune store | [optional] 

## Example

```python
from openapi_client.models.intune_store_request import IntuneStoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IntuneStoreRequest from a JSON string
intune_store_request_instance = IntuneStoreRequest.from_json(json)
# print the JSON string representation of the object
print(IntuneStoreRequest.to_json())

# convert the object into a dict
intune_store_request_dict = intune_store_request_instance.to_dict()
# create an instance of IntuneStoreRequest from a dict
intune_store_request_from_dict = IntuneStoreRequest.from_dict(intune_store_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


