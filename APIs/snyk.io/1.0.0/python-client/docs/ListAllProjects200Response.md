# ListAllProjects200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org** | [**ListAllProjects200ResponseOrg**](ListAllProjects200ResponseOrg.md) |  | [optional] 
**projects** | [**List[ListAllProjects200ResponseProjectsInner]**](ListAllProjects200ResponseProjectsInner.md) | A list of org&#39;s projects | [optional] 

## Example

```python
from openapi_client.models.list_all_projects200_response import ListAllProjects200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllProjects200Response from a JSON string
list_all_projects200_response_instance = ListAllProjects200Response.from_json(json)
# print the JSON string representation of the object
print(ListAllProjects200Response.to_json())

# convert the object into a dict
list_all_projects200_response_dict = list_all_projects200_response_instance.to_dict()
# create an instance of ListAllProjects200Response from a dict
list_all_projects200_response_from_dict = ListAllProjects200Response.from_dict(list_all_projects200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


