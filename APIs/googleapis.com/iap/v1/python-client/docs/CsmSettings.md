# CsmSettings

Configuration for RCToken generated for service mesh workloads protected by IAP. RCToken are IAP generated JWTs that can be verified at the application. The RCToken is primarily used for service mesh deployments, and can be scoped to a single mesh by configuring the audience field accordingly.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rctoken_aud** | **str** | Audience claim set in the generated RCToken. This value is not validated by IAP. | [optional] 

## Example

```python
from openapi_client.models.csm_settings import CsmSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CsmSettings from a JSON string
csm_settings_instance = CsmSettings.from_json(json)
# print the JSON string representation of the object
print(CsmSettings.to_json())

# convert the object into a dict
csm_settings_dict = csm_settings_instance.to_dict()
# create an instance of CsmSettings from a dict
csm_settings_from_dict = CsmSettings.from_dict(csm_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


