# AppPkgInfo

'The data type AppPkgInfo represents the parameters for an application package resource'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**AppPkgInfoLinks**](AppPkgInfoLinks.md) |  | 
**additional_artifacts** | **object** | Additional information of application package artifacts that are not application software images. Type is TBD | [optional] 
**app_did** | **str** | Identifier of this MEC application descriptor. This attribute shall be globally unique. | 
**app_d_version** | **str** | Identifies the version of the application descriptor. | 
**app_name** | **str** | Name to identify the MEC application. | 
**app_provider** | **str** | Provider of the application and of the AppD. | [optional] 
**app_software_version** | **str** | Software version of the application. This is updated when there is any change to the software in the onboarded application package. | 
**checksum** | [**Checksum**](Checksum.md) |  | 
**id** | **str** | Identifier of the onboarded application package. | 
**onboarding_state** | [**OnboardingState**](OnboardingState.md) |  | 
**operational_state** | [**AppPkgOperationalState**](AppPkgOperationalState.md) |  | 
**software_images** | **object** | Information of application software image in application package. Type is TBD | 
**usage_state** | [**UsageState**](UsageState.md) |  | 
**user_defined_data** | **Dict[str, object]** | &#39;This data type represents a list of key-value pairs. The order of the pairs in the list is not significant. In JSON, a set of key-value pairs is represented as an object. It shall comply with the provisions defined in clause 4 of IETF RFC 8259&#39; | [optional] 

## Example

```python
from openapi_client.models.app_pkg_info import AppPkgInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AppPkgInfo from a JSON string
app_pkg_info_instance = AppPkgInfo.from_json(json)
# print the JSON string representation of the object
print(AppPkgInfo.to_json())

# convert the object into a dict
app_pkg_info_dict = app_pkg_info_instance.to_dict()
# create an instance of AppPkgInfo from a dict
app_pkg_info_from_dict = AppPkgInfo.from_dict(app_pkg_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


