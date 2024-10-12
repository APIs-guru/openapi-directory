# GeneratedApksListResponse

Response to list generated APKs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generated_apks** | [**List[GeneratedApksPerSigningKey]**](GeneratedApksPerSigningKey.md) | All generated APKs, grouped by the APK signing key. | [optional] 

## Example

```python
from openapi_client.models.generated_apks_list_response import GeneratedApksListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratedApksListResponse from a JSON string
generated_apks_list_response_instance = GeneratedApksListResponse.from_json(json)
# print the JSON string representation of the object
print(GeneratedApksListResponse.to_json())

# convert the object into a dict
generated_apks_list_response_dict = generated_apks_list_response_instance.to_dict()
# create an instance of GeneratedApksListResponse from a dict
generated_apks_list_response_from_dict = GeneratedApksListResponse.from_dict(generated_apks_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


