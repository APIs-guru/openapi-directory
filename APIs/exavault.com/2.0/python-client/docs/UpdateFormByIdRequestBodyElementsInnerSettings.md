# UpdateFormByIdRequestBodyElementsInnerSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_required** | **bool** | True is the form element is required for submission.  | [optional] 
**sender_email** | **bool** |  | [optional] 
**use_as_folder_name** | **bool** | True if the submitted response should be used as the name for the new folder.  | [optional] 

## Example

```python
from openapi_client.models.update_form_by_id_request_body_elements_inner_settings import UpdateFormByIdRequestBodyElementsInnerSettings

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateFormByIdRequestBodyElementsInnerSettings from a JSON string
update_form_by_id_request_body_elements_inner_settings_instance = UpdateFormByIdRequestBodyElementsInnerSettings.from_json(json)
# print the JSON string representation of the object
print(UpdateFormByIdRequestBodyElementsInnerSettings.to_json())

# convert the object into a dict
update_form_by_id_request_body_elements_inner_settings_dict = update_form_by_id_request_body_elements_inner_settings_instance.to_dict()
# create an instance of UpdateFormByIdRequestBodyElementsInnerSettings from a dict
update_form_by_id_request_body_elements_inner_settings_from_dict = UpdateFormByIdRequestBodyElementsInnerSettings.from_dict(update_form_by_id_request_body_elements_inner_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


