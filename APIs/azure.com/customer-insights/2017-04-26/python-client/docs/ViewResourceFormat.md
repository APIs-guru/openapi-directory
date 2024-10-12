# ViewResourceFormat

The view resource format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**View**](View.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.view_resource_format import ViewResourceFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ViewResourceFormat from a JSON string
view_resource_format_instance = ViewResourceFormat.from_json(json)
# print the JSON string representation of the object
print(ViewResourceFormat.to_json())

# convert the object into a dict
view_resource_format_dict = view_resource_format_instance.to_dict()
# create an instance of ViewResourceFormat from a dict
view_resource_format_from_dict = ViewResourceFormat.from_dict(view_resource_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


