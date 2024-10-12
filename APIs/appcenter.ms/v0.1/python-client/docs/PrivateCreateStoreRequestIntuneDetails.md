# PrivateCreateStoreRequestIntuneDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_category** | [**StoresCreateRequestIntuneDetailsAppCategory**](StoresCreateRequestIntuneDetailsAppCategory.md) |  | [optional] 
**target_audience** | [**StoresCreateRequestIntuneDetailsTargetAudience**](StoresCreateRequestIntuneDetailsTargetAudience.md) |  | [optional] 
**tenant_id** | **str** | tenant id of the intune store | [optional] 

## Example

```python
from openapi_client.models.private_create_store_request_intune_details import PrivateCreateStoreRequestIntuneDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateCreateStoreRequestIntuneDetails from a JSON string
private_create_store_request_intune_details_instance = PrivateCreateStoreRequestIntuneDetails.from_json(json)
# print the JSON string representation of the object
print(PrivateCreateStoreRequestIntuneDetails.to_json())

# convert the object into a dict
private_create_store_request_intune_details_dict = private_create_store_request_intune_details_instance.to_dict()
# create an instance of PrivateCreateStoreRequestIntuneDetails from a dict
private_create_store_request_intune_details_from_dict = PrivateCreateStoreRequestIntuneDetails.from_dict(private_create_store_request_intune_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


