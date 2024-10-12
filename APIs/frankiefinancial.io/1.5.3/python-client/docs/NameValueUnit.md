# NameValueUnit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of this property. | 
**unit** | **str** | Unit of measure for this property. | 
**value** | **str** | Value of this property. | 

## Example

```python
from openapi_client.models.name_value_unit import NameValueUnit

# TODO update the JSON string below
json = "{}"
# create an instance of NameValueUnit from a JSON string
name_value_unit_instance = NameValueUnit.from_json(json)
# print the JSON string representation of the object
print(NameValueUnit.to_json())

# convert the object into a dict
name_value_unit_dict = name_value_unit_instance.to_dict()
# create an instance of NameValueUnit from a dict
name_value_unit_from_dict = NameValueUnit.from_dict(name_value_unit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


