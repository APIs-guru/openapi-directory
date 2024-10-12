# ThirdPartyOnlyConfig

Settings for advertisers that use third-party ad servers only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pixel_order_id_reporting_enabled** | **bool** | Whether or not order ID reporting for pixels is enabled. This value cannot be changed once set to &#x60;true&#x60;. | [optional] 

## Example

```python
from openapi_client.models.third_party_only_config import ThirdPartyOnlyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ThirdPartyOnlyConfig from a JSON string
third_party_only_config_instance = ThirdPartyOnlyConfig.from_json(json)
# print the JSON string representation of the object
print(ThirdPartyOnlyConfig.to_json())

# convert the object into a dict
third_party_only_config_dict = third_party_only_config_instance.to_dict()
# create an instance of ThirdPartyOnlyConfig from a dict
third_party_only_config_from_dict = ThirdPartyOnlyConfig.from_dict(third_party_only_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


