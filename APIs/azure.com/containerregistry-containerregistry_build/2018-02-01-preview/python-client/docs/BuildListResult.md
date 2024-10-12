# BuildListResult

Collection of builds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next set of paged results. | [optional] 
**value** | [**List[Build]**](Build.md) | The collection value. | [optional] 

## Example

```python
from openapi_client.models.build_list_result import BuildListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BuildListResult from a JSON string
build_list_result_instance = BuildListResult.from_json(json)
# print the JSON string representation of the object
print(BuildListResult.to_json())

# convert the object into a dict
build_list_result_dict = build_list_result_instance.to_dict()
# create an instance of BuildListResult from a dict
build_list_result_from_dict = BuildListResult.from_dict(build_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


