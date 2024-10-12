# StarsAddErrorSchema

Schema for error response from stars.add method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.stars_add_error_schema import StarsAddErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of StarsAddErrorSchema from a JSON string
stars_add_error_schema_instance = StarsAddErrorSchema.from_json(json)
# print the JSON string representation of the object
print(StarsAddErrorSchema.to_json())

# convert the object into a dict
stars_add_error_schema_dict = stars_add_error_schema_instance.to_dict()
# create an instance of StarsAddErrorSchema from a dict
stars_add_error_schema_from_dict = StarsAddErrorSchema.from_dict(stars_add_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


