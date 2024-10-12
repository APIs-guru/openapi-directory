# Properties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**Properties1**](Properties1.md) |  | 
**altname** | **str** |  | 
**autocomplete** | [**Autocomplete**](Autocomplete.md) |  | 
**calculated_area_sq_meters** | **float** |  | 
**name** | **str** |  | 
**region_id** | **str** |  | 
**regiontype** | **str** |  | 
**state_code** | **str** |  | 
**timestamp** | **str** |  | 

## Example

```python
from openapi_client.models.properties import Properties

# TODO update the JSON string below
json = "{}"
# create an instance of Properties from a JSON string
properties_instance = Properties.from_json(json)
# print the JSON string representation of the object
print(Properties.to_json())

# convert the object into a dict
properties_dict = properties_instance.to_dict()
# create an instance of Properties from a dict
properties_from_dict = Properties.from_dict(properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


