# StarsRemoveErrorSchema

Schema for error response from stars.remove method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.stars_remove_error_schema import StarsRemoveErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of StarsRemoveErrorSchema from a JSON string
stars_remove_error_schema_instance = StarsRemoveErrorSchema.from_json(json)
# print the JSON string representation of the object
print(StarsRemoveErrorSchema.to_json())

# convert the object into a dict
stars_remove_error_schema_dict = stars_remove_error_schema_instance.to_dict()
# create an instance of StarsRemoveErrorSchema from a dict
stars_remove_error_schema_from_dict = StarsRemoveErrorSchema.from_dict(stars_remove_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


