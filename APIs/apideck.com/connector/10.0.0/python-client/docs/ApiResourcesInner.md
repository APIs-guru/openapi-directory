# ApiResourcesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_from_coverage** | **bool** | Exclude from mapping coverage | [optional] 
**id** | **str** | ID of the resource, typically a lowercased version of its name. | [optional] 
**name** | **str** | Name of the resource (plural) | [optional] 
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_resources_inner import ApiResourcesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApiResourcesInner from a JSON string
api_resources_inner_instance = ApiResourcesInner.from_json(json)
# print the JSON string representation of the object
print(ApiResourcesInner.to_json())

# convert the object into a dict
api_resources_inner_dict = api_resources_inner_instance.to_dict()
# create an instance of ApiResourcesInner from a dict
api_resources_inner_from_dict = ApiResourcesInner.from_dict(api_resources_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


