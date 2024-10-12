# StarsRemoveSchema

Schema for successful response from stars.remove method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.stars_remove_schema import StarsRemoveSchema

# TODO update the JSON string below
json = "{}"
# create an instance of StarsRemoveSchema from a JSON string
stars_remove_schema_instance = StarsRemoveSchema.from_json(json)
# print the JSON string representation of the object
print(StarsRemoveSchema.to_json())

# convert the object into a dict
stars_remove_schema_dict = stars_remove_schema_instance.to_dict()
# create an instance of StarsRemoveSchema from a dict
stars_remove_schema_from_dict = StarsRemoveSchema.from_dict(stars_remove_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


