# FilterVersionsContainer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**versions** | [**List[FilterVersionsContainerVersionsInner]**](FilterVersionsContainerVersionsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.filter_versions_container import FilterVersionsContainer

# TODO update the JSON string below
json = "{}"
# create an instance of FilterVersionsContainer from a JSON string
filter_versions_container_instance = FilterVersionsContainer.from_json(json)
# print the JSON string representation of the object
print(FilterVersionsContainer.to_json())

# convert the object into a dict
filter_versions_container_dict = filter_versions_container_instance.to_dict()
# create an instance of FilterVersionsContainer from a dict
filter_versions_container_from_dict = FilterVersionsContainer.from_dict(filter_versions_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


