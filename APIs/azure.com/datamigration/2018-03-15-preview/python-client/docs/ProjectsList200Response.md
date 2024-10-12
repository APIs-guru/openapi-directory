# ProjectsList200Response

OData page of project resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to load the next page of projects | [optional] 
**value** | [**List[ProjectsList200ResponseValueInner]**](ProjectsList200ResponseValueInner.md) | List of projects | [optional] 

## Example

```python
from openapi_client.models.projects_list200_response import ProjectsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectsList200Response from a JSON string
projects_list200_response_instance = ProjectsList200Response.from_json(json)
# print the JSON string representation of the object
print(ProjectsList200Response.to_json())

# convert the object into a dict
projects_list200_response_dict = projects_list200_response_instance.to_dict()
# create an instance of ProjectsList200Response from a dict
projects_list200_response_from_dict = ProjectsList200Response.from_dict(projects_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


