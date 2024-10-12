# FilterVersionsContainerVersionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build** | **str** | App build number.  | 
**version** | **str** | App version.  | 

## Example

```python
from openapi_client.models.filter_versions_container_versions_inner import FilterVersionsContainerVersionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of FilterVersionsContainerVersionsInner from a JSON string
filter_versions_container_versions_inner_instance = FilterVersionsContainerVersionsInner.from_json(json)
# print the JSON string representation of the object
print(FilterVersionsContainerVersionsInner.to_json())

# convert the object into a dict
filter_versions_container_versions_inner_dict = filter_versions_container_versions_inner_instance.to_dict()
# create an instance of FilterVersionsContainerVersionsInner from a dict
filter_versions_container_versions_inner_from_dict = FilterVersionsContainerVersionsInner.from_dict(filter_versions_container_versions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


