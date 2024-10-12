# CreativeGroupsListResponse

Creative Group List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative_groups** | [**List[CreativeGroup]**](CreativeGroup.md) | Creative group collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#creativeGroupsListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.creative_groups_list_response import CreativeGroupsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeGroupsListResponse from a JSON string
creative_groups_list_response_instance = CreativeGroupsListResponse.from_json(json)
# print the JSON string representation of the object
print(CreativeGroupsListResponse.to_json())

# convert the object into a dict
creative_groups_list_response_dict = creative_groups_list_response_instance.to_dict()
# create an instance of CreativeGroupsListResponse from a dict
creative_groups_list_response_from_dict = CreativeGroupsListResponse.from_dict(creative_groups_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


