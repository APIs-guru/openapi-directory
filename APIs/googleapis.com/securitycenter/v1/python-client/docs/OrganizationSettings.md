# OrganizationSettings

User specified settings that are attached to the Security Command Center organization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_discovery_config** | [**AssetDiscoveryConfig**](AssetDiscoveryConfig.md) |  | [optional] 
**enable_asset_discovery** | **bool** | A flag that indicates if Asset Discovery should be enabled. If the flag is set to &#x60;true&#x60;, then discovery of assets will occur. If it is set to &#x60;false&#x60;, all historical assets will remain, but discovery of future assets will not occur. | [optional] 
**name** | **str** | The relative resource name of the settings. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: \&quot;organizations/{organization_id}/organizationSettings\&quot;. | [optional] 

## Example

```python
from openapi_client.models.organization_settings import OrganizationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationSettings from a JSON string
organization_settings_instance = OrganizationSettings.from_json(json)
# print the JSON string representation of the object
print(OrganizationSettings.to_json())

# convert the object into a dict
organization_settings_dict = organization_settings_instance.to_dict()
# create an instance of OrganizationSettings from a dict
organization_settings_from_dict = OrganizationSettings.from_dict(organization_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


