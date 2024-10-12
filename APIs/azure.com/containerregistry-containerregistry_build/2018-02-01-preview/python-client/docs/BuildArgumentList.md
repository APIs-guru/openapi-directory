# BuildArgumentList

The list of build arguments for a build step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next set of paged results. | [optional] 
**value** | [**List[BuildArgument]**](BuildArgument.md) | The collection value. | [optional] 

## Example

```python
from openapi_client.models.build_argument_list import BuildArgumentList

# TODO update the JSON string below
json = "{}"
# create an instance of BuildArgumentList from a JSON string
build_argument_list_instance = BuildArgumentList.from_json(json)
# print the JSON string representation of the object
print(BuildArgumentList.to_json())

# convert the object into a dict
build_argument_list_dict = build_argument_list_instance.to_dict()
# create an instance of BuildArgumentList from a dict
build_argument_list_from_dict = BuildArgumentList.from_dict(build_argument_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


