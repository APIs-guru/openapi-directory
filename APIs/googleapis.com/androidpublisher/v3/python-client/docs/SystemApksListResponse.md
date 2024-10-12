# SystemApksListResponse

Response to list previously created system APK variants.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**variants** | [**List[Variant]**](Variant.md) | All system APK variants created. | [optional] 

## Example

```python
from openapi_client.models.system_apks_list_response import SystemApksListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SystemApksListResponse from a JSON string
system_apks_list_response_instance = SystemApksListResponse.from_json(json)
# print the JSON string representation of the object
print(SystemApksListResponse.to_json())

# convert the object into a dict
system_apks_list_response_dict = system_apks_list_response_instance.to_dict()
# create an instance of SystemApksListResponse from a dict
system_apks_list_response_from_dict = SystemApksListResponse.from_dict(system_apks_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


