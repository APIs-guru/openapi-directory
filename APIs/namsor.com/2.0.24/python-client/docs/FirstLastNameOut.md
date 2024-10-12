# FirstLastNameOut

First / last name structure corresponding to the most likely parsing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** | The first name (also known as given name) | [optional] 
**id** | **str** |  | [optional] 
**last_name** | **str** | The last name (also known as family name, or surname) | [optional] 
**script** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.first_last_name_out import FirstLastNameOut

# TODO update the JSON string below
json = "{}"
# create an instance of FirstLastNameOut from a JSON string
first_last_name_out_instance = FirstLastNameOut.from_json(json)
# print the JSON string representation of the object
print(FirstLastNameOut.to_json())

# convert the object into a dict
first_last_name_out_dict = first_last_name_out_instance.to_dict()
# create an instance of FirstLastNameOut from a dict
first_last_name_out_from_dict = FirstLastNameOut.from_dict(first_last_name_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


