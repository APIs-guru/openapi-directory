# AccountListSupportedImagesResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** |  | [optional] 
**value** | [**List[ImageInformation]**](ImageInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_list_supported_images_result import AccountListSupportedImagesResult

# TODO update the JSON string below
json = "{}"
# create an instance of AccountListSupportedImagesResult from a JSON string
account_list_supported_images_result_instance = AccountListSupportedImagesResult.from_json(json)
# print the JSON string representation of the object
print(AccountListSupportedImagesResult.to_json())

# convert the object into a dict
account_list_supported_images_result_dict = account_list_supported_images_result_instance.to_dict()
# create an instance of AccountListSupportedImagesResult from a dict
account_list_supported_images_result_from_dict = AccountListSupportedImagesResult.from_dict(account_list_supported_images_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


