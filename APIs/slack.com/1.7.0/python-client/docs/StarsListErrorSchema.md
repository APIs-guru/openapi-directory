# StarsListErrorSchema

Schema for error response from stars.list method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.stars_list_error_schema import StarsListErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of StarsListErrorSchema from a JSON string
stars_list_error_schema_instance = StarsListErrorSchema.from_json(json)
# print the JSON string representation of the object
print(StarsListErrorSchema.to_json())

# convert the object into a dict
stars_list_error_schema_dict = stars_list_error_schema_instance.to_dict()
# create an instance of StarsListErrorSchema from a dict
stars_list_error_schema_from_dict = StarsListErrorSchema.from_dict(stars_list_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


