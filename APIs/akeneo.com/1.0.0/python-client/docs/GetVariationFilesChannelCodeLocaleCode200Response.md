# GetVariationFilesChannelCodeLocaleCode200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link** | [**GetVariationFilesChannelCodeLocaleCode200ResponseLink**](GetVariationFilesChannelCodeLocaleCode200ResponseLink.md) |  | [optional] 
**code** | **str** | Code of the PAM asset variation file | [optional] 
**locale** | **str** | Locale of the PAM asset variation file, equal to &#x60;null&#x60; if the asset is not localizable | [optional] 
**scope** | **str** | Channel of the PAM asset variation file | [optional] 

## Example

```python
from openapi_client.models.get_variation_files_channel_code_locale_code200_response import GetVariationFilesChannelCodeLocaleCode200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetVariationFilesChannelCodeLocaleCode200Response from a JSON string
get_variation_files_channel_code_locale_code200_response_instance = GetVariationFilesChannelCodeLocaleCode200Response.from_json(json)
# print the JSON string representation of the object
print(GetVariationFilesChannelCodeLocaleCode200Response.to_json())

# convert the object into a dict
get_variation_files_channel_code_locale_code200_response_dict = get_variation_files_channel_code_locale_code200_response_instance.to_dict()
# create an instance of GetVariationFilesChannelCodeLocaleCode200Response from a dict
get_variation_files_channel_code_locale_code200_response_from_dict = GetVariationFilesChannelCodeLocaleCode200Response.from_dict(get_variation_files_channel_code_locale_code200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


