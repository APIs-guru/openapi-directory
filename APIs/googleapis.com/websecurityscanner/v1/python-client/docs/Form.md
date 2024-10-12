# Form

! Information about a vulnerability with an HTML.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_uri** | **str** | ! The URI where to send the form when it&#39;s submitted. | [optional] 
**fields** | **List[str]** | ! The names of form fields related to the vulnerability. | [optional] 

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


