# Targeting

Targeting details for a recovery action such as regions, android sdk levels, app versions etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_users** | [**AllUsers**](AllUsers.md) |  | [optional] 
**android_sdks** | [**AndroidSdks**](AndroidSdks.md) |  | [optional] 
**regions** | [**Regions**](Regions.md) |  | [optional] 
**version_list** | [**AppVersionList**](AppVersionList.md) |  | [optional] 
**version_range** | [**AppVersionRange**](AppVersionRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.targeting import Targeting

# TODO update the JSON string below
json = "{}"
# create an instance of Targeting from a JSON string
targeting_instance = Targeting.from_json(json)
# print the JSON string representation of the object
print(Targeting.to_json())

# convert the object into a dict
targeting_dict = targeting_instance.to_dict()
# create an instance of Targeting from a dict
targeting_from_dict = Targeting.from_dict(targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


