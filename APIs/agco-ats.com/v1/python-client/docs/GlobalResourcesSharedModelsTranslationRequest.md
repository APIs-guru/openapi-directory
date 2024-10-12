# GlobalResourcesSharedModelsTranslationRequest

A request to translate specified strings into specified locales

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_user_id** | **int** | The ID of the user from which approval for the request is required | [optional] 
**cc_email_addresses** | **List[str]** | Additional email addresses to CC on emails pertaining to the request | 
**charge_to_account** | **str** | The account to charge for the request | 
**deadline** | **datetime** | The date by which the translations in the request are needed. Defaults to 30 days from the current date | 
**id** | **int** | The ID of the request | [optional] 
**locale_ids** | **List[int]** | Locale IDs to which these strings are requested to be translated | 
**notes** | **str** | Additional notes or comments about the request | 
**questions_user_id** | **int** | The ID of the user to which to address questions regarding the request | [optional] 
**state** | **str** | The state of the request | 
**submitted_by** | **int** | The ID of the User that submitted the request | [optional] 
**translator_email** | **str** | The email address for the translator | [optional] 
**translator_name** | **str** | The name of the translator | [optional] 

## Example

```python
from openapi_client.models.global_resources_shared_models_translation_request import GlobalResourcesSharedModelsTranslationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalResourcesSharedModelsTranslationRequest from a JSON string
global_resources_shared_models_translation_request_instance = GlobalResourcesSharedModelsTranslationRequest.from_json(json)
# print the JSON string representation of the object
print(GlobalResourcesSharedModelsTranslationRequest.to_json())

# convert the object into a dict
global_resources_shared_models_translation_request_dict = global_resources_shared_models_translation_request_instance.to_dict()
# create an instance of GlobalResourcesSharedModelsTranslationRequest from a dict
global_resources_shared_models_translation_request_from_dict = GlobalResourcesSharedModelsTranslationRequest.from_dict(global_resources_shared_models_translation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


