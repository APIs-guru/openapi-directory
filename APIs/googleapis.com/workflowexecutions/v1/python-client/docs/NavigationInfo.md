# NavigationInfo

NavigationInfo describes what steps if any come before or after this step, or what steps are parents or children of this step.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | **List[str]** | Step entries that can be reached by \&quot;stepping into\&quot; e.g. a subworkflow call. | [optional] 
**next** | **str** | The index of the next step in the current workflow, if any. | [optional] 
**parent** | **str** | The step entry, if any, that can be reached by \&quot;stepping out\&quot; of the current workflow being executed. | [optional] 
**previous** | **str** | The index of the previous step in the current workflow, if any. | [optional] 

## Example

```python
from openapi_client.models.navigation_info import NavigationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of NavigationInfo from a JSON string
navigation_info_instance = NavigationInfo.from_json(json)
# print the JSON string representation of the object
print(NavigationInfo.to_json())

# convert the object into a dict
navigation_info_dict = navigation_info_instance.to_dict()
# create an instance of NavigationInfo from a dict
navigation_info_from_dict = NavigationInfo.from_dict(navigation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


