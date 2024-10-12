# PagedNodeInfoList

The list of nodes in the cluster. The list is paged when all of the results cannot fit in a single message. The next set of results can be obtained by executing the same query with the continuation token provided in this list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token parameter is used to obtain next set of results. The continuation token is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token is not included in the response. | [optional] 
**items** | [**List[NodeInfo]**](NodeInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.paged_node_info_list import PagedNodeInfoList

# TODO update the JSON string below
json = "{}"
# create an instance of PagedNodeInfoList from a JSON string
paged_node_info_list_instance = PagedNodeInfoList.from_json(json)
# print the JSON string representation of the object
print(PagedNodeInfoList.to_json())

# convert the object into a dict
paged_node_info_list_dict = paged_node_info_list_instance.to_dict()
# create an instance of PagedNodeInfoList from a dict
paged_node_info_list_from_dict = PagedNodeInfoList.from_dict(paged_node_info_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


