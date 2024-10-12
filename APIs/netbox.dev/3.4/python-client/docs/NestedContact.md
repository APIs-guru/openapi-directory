# NestedContact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_contact import NestedContact

# TODO update the JSON string below
json = "{}"
# create an instance of NestedContact from a JSON string
nested_contact_instance = NestedContact.from_json(json)
# print the JSON string representation of the object
print(NestedContact.to_json())

# convert the object into a dict
nested_contact_dict = nested_contact_instance.to_dict()
# create an instance of NestedContact from a dict
nested_contact_from_dict = NestedContact.from_dict(nested_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


