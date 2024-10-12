# HockeyAppCompatibilityReleaseResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appsize** | **int** |  | [optional] 
**bundle_identifier** | **str** |  | [optional] 
**device_family** | **str** |  | [optional] 
**external** | **bool** |  | [optional] 
**id** | **int** |  | [optional] 
**install_url** | **str** |  | [optional] 
**mandatory** | **bool** |  | [optional] 
**minimum_os_version** | **str** |  | [optional] 
**notes** | **str** |  | [optional] 
**shortversion** | **str** |  | [optional] 
**uploaded_at** | **str** |  | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.hockey_app_compatibility_release_response import HockeyAppCompatibilityReleaseResponse

# TODO update the JSON string below
json = "{}"
# create an instance of HockeyAppCompatibilityReleaseResponse from a JSON string
hockey_app_compatibility_release_response_instance = HockeyAppCompatibilityReleaseResponse.from_json(json)
# print the JSON string representation of the object
print(HockeyAppCompatibilityReleaseResponse.to_json())

# convert the object into a dict
hockey_app_compatibility_release_response_dict = hockey_app_compatibility_release_response_instance.to_dict()
# create an instance of HockeyAppCompatibilityReleaseResponse from a dict
hockey_app_compatibility_release_response_from_dict = HockeyAppCompatibilityReleaseResponse.from_dict(hockey_app_compatibility_release_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


