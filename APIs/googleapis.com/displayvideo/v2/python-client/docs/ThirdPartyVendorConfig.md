# ThirdPartyVendorConfig

Settings that control how third-party measurement vendors are configured.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**placement_id** | **str** | The ID used by the platform of the third-party vendor to identify the line item. | [optional] 
**vendor** | **str** | The third-party measurement vendor. | [optional] 

## Example

```python
from openapi_client.models.third_party_vendor_config import ThirdPartyVendorConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ThirdPartyVendorConfig from a JSON string
third_party_vendor_config_instance = ThirdPartyVendorConfig.from_json(json)
# print the JSON string representation of the object
print(ThirdPartyVendorConfig.to_json())

# convert the object into a dict
third_party_vendor_config_dict = third_party_vendor_config_instance.to_dict()
# create an instance of ThirdPartyVendorConfig from a dict
third_party_vendor_config_from_dict = ThirdPartyVendorConfig.from_dict(third_party_vendor_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


