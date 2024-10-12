# LegacyUpdateCheckResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**update_info** | [**LegacyCodePushAcquisitionUpdateCheck200ResponseUpdateInfo**](LegacyCodePushAcquisitionUpdateCheck200ResponseUpdateInfo.md) |  | 

## Example

```python
from openapi_client.models.legacy_update_check_response import LegacyUpdateCheckResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyUpdateCheckResponse from a JSON string
legacy_update_check_response_instance = LegacyUpdateCheckResponse.from_json(json)
# print the JSON string representation of the object
print(LegacyUpdateCheckResponse.to_json())

# convert the object into a dict
legacy_update_check_response_dict = legacy_update_check_response_instance.to_dict()
# create an instance of LegacyUpdateCheckResponse from a dict
legacy_update_check_response_from_dict = LegacyUpdateCheckResponse.from_dict(legacy_update_check_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


