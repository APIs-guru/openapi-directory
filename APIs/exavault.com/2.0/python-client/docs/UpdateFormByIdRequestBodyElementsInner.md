# UpdateFormByIdRequestBodyElementsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | ID of the form element. If you&#39;re adding a new element to the form, do not include this field. | [optional] 
**name** | **str** | Name of the form element. | [optional] 
**order** | **int** | The order the fields will be displayed to the recipient. Starts at 0.  | [optional] 
**settings** | [**UpdateFormByIdRequestBodyElementsInnerSettings**](UpdateFormByIdRequestBodyElementsInnerSettings.md) |  | [optional] 
**type** | **str** | Type of form field to use. | [optional] 

## Example

```python
from openapi_client.models.update_form_by_id_request_body_elements_inner import UpdateFormByIdRequestBodyElementsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateFormByIdRequestBodyElementsInner from a JSON string
update_form_by_id_request_body_elements_inner_instance = UpdateFormByIdRequestBodyElementsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateFormByIdRequestBodyElementsInner.to_json())

# convert the object into a dict
update_form_by_id_request_body_elements_inner_dict = update_form_by_id_request_body_elements_inner_instance.to_dict()
# create an instance of UpdateFormByIdRequestBodyElementsInner from a dict
update_form_by_id_request_body_elements_inner_from_dict = UpdateFormByIdRequestBodyElementsInner.from_dict(update_form_by_id_request_body_elements_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


