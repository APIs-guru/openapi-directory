# UpdateFormByIdRequestBody

CSS Styles of the form.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**css_styles** | **str** |  | [optional] 
**elements** | [**List[UpdateFormByIdRequestBodyElementsInner]**](UpdateFormByIdRequestBodyElementsInner.md) |  | [optional] 
**form_description** | **str** | Set a description for the form that will be visible to recipients.  | [optional] 
**submit_button_text** | **str** | Text to be displayed on the submission button. | [optional] 
**success_message** | **str** | Text to be displayed when a recipient has submitted the form.  | [optional] 

## Example

```python
from openapi_client.models.update_form_by_id_request_body import UpdateFormByIdRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateFormByIdRequestBody from a JSON string
update_form_by_id_request_body_instance = UpdateFormByIdRequestBody.from_json(json)
# print the JSON string representation of the object
print(UpdateFormByIdRequestBody.to_json())

# convert the object into a dict
update_form_by_id_request_body_dict = update_form_by_id_request_body_instance.to_dict()
# create an instance of UpdateFormByIdRequestBody from a dict
update_form_by_id_request_body_from_dict = UpdateFormByIdRequestBody.from_dict(update_form_by_id_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


