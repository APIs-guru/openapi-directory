# TopologyListByHomeRegionDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**TopologyListByHomeRegionDefaultResponseError**](TopologyListByHomeRegionDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.topology_list_by_home_region_default_response import TopologyListByHomeRegionDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TopologyListByHomeRegionDefaultResponse from a JSON string
topology_list_by_home_region_default_response_instance = TopologyListByHomeRegionDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(TopologyListByHomeRegionDefaultResponse.to_json())

# convert the object into a dict
topology_list_by_home_region_default_response_dict = topology_list_by_home_region_default_response_instance.to_dict()
# create an instance of TopologyListByHomeRegionDefaultResponse from a dict
topology_list_by_home_region_default_response_from_dict = TopologyListByHomeRegionDefaultResponse.from_dict(topology_list_by_home_region_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


