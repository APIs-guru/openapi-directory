# ECommercePlatformLinkInfo

Additional information required for E_COMMERCE_PLATFORM link type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_account_id** | **str** | The id used by the third party service provider to identify the merchant. | [optional] 

## Example

```python
from openapi_client.models.e_commerce_platform_link_info import ECommercePlatformLinkInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ECommercePlatformLinkInfo from a JSON string
e_commerce_platform_link_info_instance = ECommercePlatformLinkInfo.from_json(json)
# print the JSON string representation of the object
print(ECommercePlatformLinkInfo.to_json())

# convert the object into a dict
e_commerce_platform_link_info_dict = e_commerce_platform_link_info_instance.to_dict()
# create an instance of ECommercePlatformLinkInfo from a dict
e_commerce_platform_link_info_from_dict = ECommercePlatformLinkInfo.from_dict(e_commerce_platform_link_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


