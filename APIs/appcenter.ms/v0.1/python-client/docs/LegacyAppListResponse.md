# LegacyAppListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apps** | [**List[LegacyAppListResponseAppsInner]**](LegacyAppListResponseAppsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.legacy_app_list_response import LegacyAppListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyAppListResponse from a JSON string
legacy_app_list_response_instance = LegacyAppListResponse.from_json(json)
# print the JSON string representation of the object
print(LegacyAppListResponse.to_json())

# convert the object into a dict
legacy_app_list_response_dict = legacy_app_list_response_instance.to_dict()
# create an instance of LegacyAppListResponse from a dict
legacy_app_list_response_from_dict = LegacyAppListResponse.from_dict(legacy_app_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


