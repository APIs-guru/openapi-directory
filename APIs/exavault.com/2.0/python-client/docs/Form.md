# Form

Regular form object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**FormAttributes**](FormAttributes.md) |  | [optional] 
**id** | **int** | ID of the form. | [optional] 
**relationships** | [**FormRelationships**](FormRelationships.md) |  | [optional] 
**type** | **str** | Type is \&quot;form\&quot;. | [optional] 

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


