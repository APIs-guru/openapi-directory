# Properties2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculated_area_sq_meters** | **float** |  | 
**location** | [**Location3**](Location3.md) |  | 
**status** | **int** |  | 

## Example

```python
from openapi_client.models.properties2 import Properties2

# TODO update the JSON string below
json = "{}"
# create an instance of Properties2 from a JSON string
properties2_instance = Properties2.from_json(json)
# print the JSON string representation of the object
print(Properties2.to_json())

# convert the object into a dict
properties2_dict = properties2_instance.to_dict()
# create an instance of Properties2 from a dict
properties2_from_dict = Properties2.from_dict(properties2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


