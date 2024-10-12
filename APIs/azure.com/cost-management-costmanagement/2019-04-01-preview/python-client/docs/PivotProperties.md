# PivotProperties

Each pivot must contain a 'type' and 'name'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Data field to show in view. | [optional] 
**type** | **str** | Data type to show in view. | [optional] 

## Example

```python
from openapi_client.models.pivot_properties import PivotProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PivotProperties from a JSON string
pivot_properties_instance = PivotProperties.from_json(json)
# print the JSON string representation of the object
print(PivotProperties.to_json())

# convert the object into a dict
pivot_properties_dict = pivot_properties_instance.to_dict()
# create an instance of PivotProperties from a dict
pivot_properties_from_dict = PivotProperties.from_dict(pivot_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


