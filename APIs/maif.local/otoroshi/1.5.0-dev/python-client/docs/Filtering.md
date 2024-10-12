# Filtering


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude** | **List[Dict[str, str]]** | Excluding pattern | [optional] 
**include** | **List[Dict[str, str]]** | Including pattern | [optional] 

## Example

```python
from openapi_client.models.filtering import Filtering

# TODO update the JSON string below
json = "{}"
# create an instance of Filtering from a JSON string
filtering_instance = Filtering.from_json(json)
# print the JSON string representation of the object
print(Filtering.to_json())

# convert the object into a dict
filtering_dict = filtering_instance.to_dict()
# create an instance of Filtering from a dict
filtering_from_dict = Filtering.from_dict(filtering_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


