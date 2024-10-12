# StoresList200ResponseInnerIntuneDetails

Store details for intune

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_category** | [**StoresList200ResponseInnerIntuneDetailsAppCategory**](StoresList200ResponseInnerIntuneDetailsAppCategory.md) |  | [optional] 
**target_audience** | [**StoresList200ResponseInnerIntuneDetailsTargetAudience**](StoresList200ResponseInnerIntuneDetailsTargetAudience.md) |  | [optional] 

## Example

```python
from openapi_client.models.stores_list200_response_inner_intune_details import StoresList200ResponseInnerIntuneDetails

# TODO update the JSON string below
json = "{}"
# create an instance of StoresList200ResponseInnerIntuneDetails from a JSON string
stores_list200_response_inner_intune_details_instance = StoresList200ResponseInnerIntuneDetails.from_json(json)
# print the JSON string representation of the object
print(StoresList200ResponseInnerIntuneDetails.to_json())

# convert the object into a dict
stores_list200_response_inner_intune_details_dict = stores_list200_response_inner_intune_details_instance.to_dict()
# create an instance of StoresList200ResponseInnerIntuneDetails from a dict
stores_list200_response_inner_intune_details_from_dict = StoresList200ResponseInnerIntuneDetails.from_dict(stores_list200_response_inner_intune_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


