# StoresCreateRequestIntuneDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_category** | [**StoresCreateRequestIntuneDetailsAppCategory**](StoresCreateRequestIntuneDetailsAppCategory.md) |  | [optional] 
**secret_json** | [**StoresCreateRequestIntuneDetailsSecretJson**](StoresCreateRequestIntuneDetailsSecretJson.md) |  | [optional] 
**target_audience** | [**StoresCreateRequestIntuneDetailsTargetAudience**](StoresCreateRequestIntuneDetailsTargetAudience.md) |  | [optional] 
**tenant_id** | **str** | tenant id of the intune store | [optional] 

## Example

```python
from openapi_client.models.stores_create_request_intune_details import StoresCreateRequestIntuneDetails

# TODO update the JSON string below
json = "{}"
# create an instance of StoresCreateRequestIntuneDetails from a JSON string
stores_create_request_intune_details_instance = StoresCreateRequestIntuneDetails.from_json(json)
# print the JSON string representation of the object
print(StoresCreateRequestIntuneDetails.to_json())

# convert the object into a dict
stores_create_request_intune_details_dict = stores_create_request_intune_details_instance.to_dict()
# create an instance of StoresCreateRequestIntuneDetails from a dict
stores_create_request_intune_details_from_dict = StoresCreateRequestIntuneDetails.from_dict(stores_create_request_intune_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


