# UpgradeDomainInfo

Information about an upgrade domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the upgrade domain | [optional] 
**state** | [**UpgradeDomainState**](UpgradeDomainState.md) |  | [optional] 

## Example

```python
from openapi_client.models.upgrade_domain_info import UpgradeDomainInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeDomainInfo from a JSON string
upgrade_domain_info_instance = UpgradeDomainInfo.from_json(json)
# print the JSON string representation of the object
print(UpgradeDomainInfo.to_json())

# convert the object into a dict
upgrade_domain_info_dict = upgrade_domain_info_instance.to_dict()
# create an instance of UpgradeDomainInfo from a dict
upgrade_domain_info_from_dict = UpgradeDomainInfo.from_dict(upgrade_domain_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


