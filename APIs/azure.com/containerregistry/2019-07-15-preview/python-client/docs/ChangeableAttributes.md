# ChangeableAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete_enabled** | **bool** | Delete enabled | [optional] 
**list_enabled** | **bool** | List enabled | [optional] 
**read_enabled** | **bool** | Read enabled | [optional] 
**write_enabled** | **bool** | Write enabled | [optional] 

## Example

```python
from openapi_client.models.changeable_attributes import ChangeableAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeableAttributes from a JSON string
changeable_attributes_instance = ChangeableAttributes.from_json(json)
# print the JSON string representation of the object
print(ChangeableAttributes.to_json())

# convert the object into a dict
changeable_attributes_dict = changeable_attributes_instance.to_dict()
# create an instance of ChangeableAttributes from a dict
changeable_attributes_from_dict = ChangeableAttributes.from_dict(changeable_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


