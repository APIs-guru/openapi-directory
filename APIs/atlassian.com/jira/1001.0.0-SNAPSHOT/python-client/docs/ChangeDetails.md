# ChangeDetails

A change item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | **str** | The name of the field changed. | [optional] [readonly] 
**field_id** | **str** | The ID of the field changed. | [optional] [readonly] 
**fieldtype** | **str** | The type of the field changed. | [optional] [readonly] 
**var_from** | **str** | The details of the original value. | [optional] [readonly] 
**from_string** | **str** | The details of the original value as a string. | [optional] [readonly] 
**to** | **str** | The details of the new value. | [optional] [readonly] 

## Example

```python
from openapi_client.models.change_details import ChangeDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeDetails from a JSON string
change_details_instance = ChangeDetails.from_json(json)
# print the JSON string representation of the object
print(ChangeDetails.to_json())

# convert the object into a dict
change_details_dict = change_details_instance.to_dict()
# create an instance of ChangeDetails from a dict
change_details_from_dict = ChangeDetails.from_dict(change_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


