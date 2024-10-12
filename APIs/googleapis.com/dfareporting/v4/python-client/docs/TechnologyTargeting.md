# TechnologyTargeting

Technology Targeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**browsers** | [**List[Browser]**](Browser.md) | Browsers that this ad targets. For each browser either set browserVersionId or dartId along with the version numbers. If both are specified, only browserVersionId will be used. The other fields are populated automatically when the ad is inserted or updated. | [optional] 
**connection_types** | [**List[ConnectionType]**](ConnectionType.md) | Connection types that this ad targets. For each connection type only id is required. The other fields are populated automatically when the ad is inserted or updated. | [optional] 
**mobile_carriers** | [**List[MobileCarrier]**](MobileCarrier.md) | Mobile carriers that this ad targets. For each mobile carrier only id is required, and the other fields are populated automatically when the ad is inserted or updated. If targeting a mobile carrier, do not set targeting for any zip codes. | [optional] 
**operating_system_versions** | [**List[OperatingSystemVersion]**](OperatingSystemVersion.md) | Operating system versions that this ad targets. To target all versions, use operatingSystems. For each operating system version, only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system version, do not set targeting for the corresponding operating system in operatingSystems. | [optional] 
**operating_systems** | [**List[OperatingSystem]**](OperatingSystem.md) | Operating systems that this ad targets. To target specific versions, use operatingSystemVersions. For each operating system only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system, do not set targeting for operating system versions for the same operating system. | [optional] 
**platform_types** | [**List[PlatformType]**](PlatformType.md) | Platform types that this ad targets. For example, desktop, mobile, or tablet. For each platform type, only id is required, and the other fields are populated automatically when the ad is inserted or updated. | [optional] 

## Example

```python
from openapi_client.models.technology_targeting import TechnologyTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of TechnologyTargeting from a JSON string
technology_targeting_instance = TechnologyTargeting.from_json(json)
# print the JSON string representation of the object
print(TechnologyTargeting.to_json())

# convert the object into a dict
technology_targeting_dict = technology_targeting_instance.to_dict()
# create an instance of TechnologyTargeting from a dict
technology_targeting_from_dict = TechnologyTargeting.from_dict(technology_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


