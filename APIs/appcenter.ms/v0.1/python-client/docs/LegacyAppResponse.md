# LegacyAppResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**LegacyAppListResponseAppsInner**](LegacyAppListResponseAppsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.legacy_app_response import LegacyAppResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyAppResponse from a JSON string
legacy_app_response_instance = LegacyAppResponse.from_json(json)
# print the JSON string representation of the object
print(LegacyAppResponse.to_json())

# convert the object into a dict
legacy_app_response_dict = legacy_app_response_instance.to_dict()
# create an instance of LegacyAppResponse from a dict
legacy_app_response_from_dict = LegacyAppResponse.from_dict(legacy_app_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


