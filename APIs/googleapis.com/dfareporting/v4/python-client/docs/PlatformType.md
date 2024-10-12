# PlatformType

Contains information about a platform type that can be targeted by ads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of this platform type. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#platformType\&quot;. | [optional] 
**name** | **str** | Name of this platform type. | [optional] 

## Example

```python
from openapi_client.models.platform_type import PlatformType

# TODO update the JSON string below
json = "{}"
# create an instance of PlatformType from a JSON string
platform_type_instance = PlatformType.from_json(json)
# print the JSON string representation of the object
print(PlatformType.to_json())

# convert the object into a dict
platform_type_dict = platform_type_instance.to_dict()
# create an instance of PlatformType from a dict
platform_type_from_dict = PlatformType.from_dict(platform_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


