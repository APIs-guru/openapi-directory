# PartnerDataAccessConfig

Settings that control how partner related data may be accessed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sdf_config** | [**SdfConfig**](SdfConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.partner_data_access_config import PartnerDataAccessConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerDataAccessConfig from a JSON string
partner_data_access_config_instance = PartnerDataAccessConfig.from_json(json)
# print the JSON string representation of the object
print(PartnerDataAccessConfig.to_json())

# convert the object into a dict
partner_data_access_config_dict = partner_data_access_config_instance.to_dict()
# create an instance of PartnerDataAccessConfig from a dict
partner_data_access_config_from_dict = PartnerDataAccessConfig.from_dict(partner_data_access_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


