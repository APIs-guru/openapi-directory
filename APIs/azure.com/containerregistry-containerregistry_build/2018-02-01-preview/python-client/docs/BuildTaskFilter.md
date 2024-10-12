# BuildTaskFilter

The filter that can be used for listing build tasks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** | The alternative name for build task. | [optional] 

## Example

```python
from openapi_client.models.build_task_filter import BuildTaskFilter

# TODO update the JSON string below
json = "{}"
# create an instance of BuildTaskFilter from a JSON string
build_task_filter_instance = BuildTaskFilter.from_json(json)
# print the JSON string representation of the object
print(BuildTaskFilter.to_json())

# convert the object into a dict
build_task_filter_dict = build_task_filter_instance.to_dict()
# create an instance of BuildTaskFilter from a dict
build_task_filter_from_dict = BuildTaskFilter.from_dict(build_task_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


