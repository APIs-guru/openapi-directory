# Dependencies


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[ListAllDependencies200ResponseResultsInner]**](ListAllDependencies200ResponseResultsInner.md) | A list of issues | 
**total** | **float** | The number of results returned | [optional] 

## Example

```python
from openapi_client.models.dependencies import Dependencies

# TODO update the JSON string below
json = "{}"
# create an instance of Dependencies from a JSON string
dependencies_instance = Dependencies.from_json(json)
# print the JSON string representation of the object
print(Dependencies.to_json())

# convert the object into a dict
dependencies_dict = dependencies_instance.to_dict()
# create an instance of Dependencies from a dict
dependencies_from_dict = Dependencies.from_dict(dependencies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


