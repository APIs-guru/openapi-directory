# CrashesGetAppCrashesInfo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**features** | [**CrashesGetAppCrashesInfo200ResponseFeatures**](CrashesGetAppCrashesInfo200ResponseFeatures.md) |  | 
**has_crashes** | **bool** |  | 

## Example

```python
from openapi_client.models.crashes_get_app_crashes_info200_response import CrashesGetAppCrashesInfo200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CrashesGetAppCrashesInfo200Response from a JSON string
crashes_get_app_crashes_info200_response_instance = CrashesGetAppCrashesInfo200Response.from_json(json)
# print the JSON string representation of the object
print(CrashesGetAppCrashesInfo200Response.to_json())

# convert the object into a dict
crashes_get_app_crashes_info200_response_dict = crashes_get_app_crashes_info200_response_instance.to_dict()
# create an instance of CrashesGetAppCrashesInfo200Response from a dict
crashes_get_app_crashes_info200_response_from_dict = CrashesGetAppCrashesInfo200Response.from_dict(crashes_get_app_crashes_info200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


