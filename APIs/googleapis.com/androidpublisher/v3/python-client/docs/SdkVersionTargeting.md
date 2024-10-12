# SdkVersionTargeting

Targeting based on sdk version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternatives** | [**List[SdkVersion]**](SdkVersion.md) | Targeting of other sibling directories that were in the Bundle. For main splits this is targeting of other main splits. | [optional] 
**value** | [**List[SdkVersion]**](SdkVersion.md) | Value of an sdk version. | [optional] 

## Example

```python
from openapi_client.models.sdk_version_targeting import SdkVersionTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of SdkVersionTargeting from a JSON string
sdk_version_targeting_instance = SdkVersionTargeting.from_json(json)
# print the JSON string representation of the object
print(SdkVersionTargeting.to_json())

# convert the object into a dict
sdk_version_targeting_dict = sdk_version_targeting_instance.to_dict()
# create an instance of SdkVersionTargeting from a dict
sdk_version_targeting_from_dict = SdkVersionTargeting.from_dict(sdk_version_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


