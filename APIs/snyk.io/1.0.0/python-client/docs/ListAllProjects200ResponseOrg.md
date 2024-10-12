# ListAllProjects200ResponseOrg


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of the org | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.list_all_projects200_response_org import ListAllProjects200ResponseOrg

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllProjects200ResponseOrg from a JSON string
list_all_projects200_response_org_instance = ListAllProjects200ResponseOrg.from_json(json)
# print the JSON string representation of the object
print(ListAllProjects200ResponseOrg.to_json())

# convert the object into a dict
list_all_projects200_response_org_dict = list_all_projects200_response_org_instance.to_dict()
# create an instance of ListAllProjects200ResponseOrg from a dict
list_all_projects200_response_org_from_dict = ListAllProjects200ResponseOrg.from_dict(list_all_projects200_response_org_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


