# GetReferenceFilesLocaleCode200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link** | [**GetReferenceFilesLocaleCode200ResponseLink**](GetReferenceFilesLocaleCode200ResponseLink.md) |  | [optional] 
**code** | **str** | Code of the PAM asset reference file | [optional] 
**locale** | **str** | Locale of the PAM asset reference file, equal to &#x60;null&#x60; if the asset is not localizable | [optional] 

## Example

```python
from openapi_client.models.get_reference_files_locale_code200_response import GetReferenceFilesLocaleCode200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetReferenceFilesLocaleCode200Response from a JSON string
get_reference_files_locale_code200_response_instance = GetReferenceFilesLocaleCode200Response.from_json(json)
# print the JSON string representation of the object
print(GetReferenceFilesLocaleCode200Response.to_json())

# convert the object into a dict
get_reference_files_locale_code200_response_dict = get_reference_files_locale_code200_response_instance.to_dict()
# create an instance of GetReferenceFilesLocaleCode200Response from a dict
get_reference_files_locale_code200_response_from_dict = GetReferenceFilesLocaleCode200Response.from_dict(get_reference_files_locale_code200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


