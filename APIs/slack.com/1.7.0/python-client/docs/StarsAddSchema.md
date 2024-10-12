# StarsAddSchema

Schema for successful response from stars.add method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.stars_add_schema import StarsAddSchema

# TODO update the JSON string below
json = "{}"
# create an instance of StarsAddSchema from a JSON string
stars_add_schema_instance = StarsAddSchema.from_json(json)
# print the JSON string representation of the object
print(StarsAddSchema.to_json())

# convert the object into a dict
stars_add_schema_dict = stars_add_schema_instance.to_dict()
# create an instance of StarsAddSchema from a dict
stars_add_schema_from_dict = StarsAddSchema.from_dict(stars_add_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


