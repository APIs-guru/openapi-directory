# Form

A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form_id** | **str** | Output only. The form ID. | [optional] [readonly] 
**info** | [**Info**](Info.md) |  | [optional] 
**items** | [**List[Item]**](Item.md) | Required. A list of the form&#39;s items, which can include section headers, questions, embedded media, etc. | [optional] 
**linked_sheet_id** | **str** | Output only. The ID of the linked Google Sheet which is accumulating responses from this Form (if such a Sheet exists). | [optional] [readonly] 
**responder_uri** | **str** | Output only. The form URI to share with responders. This opens a page that allows the user to submit responses but not edit the questions. | [optional] [readonly] 
**revision_id** | **str** | Output only. The revision ID of the form. Used in the WriteControl in update requests to identify the revision on which the changes are based. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the form has not changed. Conversely, a changed ID (for the same form and user) usually means the form has been updated; however, a changed ID can also be due to internal factors such as ID format changes. | [optional] [readonly] 
**settings** | [**FormSettings**](FormSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.form import Form

# TODO update the JSON string below
json = "{}"
# create an instance of Form from a JSON string
form_instance = Form.from_json(json)
# print the JSON string representation of the object
print(Form.to_json())

# convert the object into a dict
form_dict = form_instance.to_dict()
# create an instance of Form from a dict
form_from_dict = Form.from_dict(form_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


