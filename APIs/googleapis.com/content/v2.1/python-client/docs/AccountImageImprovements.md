# AccountImageImprovements

This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_image_improvements_settings** | [**AccountImageImprovementsSettings**](AccountImageImprovementsSettings.md) |  | [optional] 
**effective_allow_automatic_image_improvements** | **bool** | Output only. The effective value of allow_automatic_image_improvements. If account_image_improvements_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. | [optional] [readonly] 

## Example

```python
from openapi_client.models.account_image_improvements import AccountImageImprovements

# TODO update the JSON string below
json = "{}"
# create an instance of AccountImageImprovements from a JSON string
account_image_improvements_instance = AccountImageImprovements.from_json(json)
# print the JSON string representation of the object
print(AccountImageImprovements.to_json())

# convert the object into a dict
account_image_improvements_dict = account_image_improvements_instance.to_dict()
# create an instance of AccountImageImprovements from a dict
account_image_improvements_from_dict = AccountImageImprovements.from_dict(account_image_improvements_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


