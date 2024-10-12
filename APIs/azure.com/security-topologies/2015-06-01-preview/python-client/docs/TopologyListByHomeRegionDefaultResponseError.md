# TopologyListByHomeRegionDefaultResponseError

Error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | An identifier for the error. Codes are invariant and are intended to be consumed programmatically. | [optional] [readonly] 
**message** | **str** | A message describing the error, intended to be suitable for display in a user interface. | [optional] [readonly] 

## Example

```python
from openapi_client.models.topology_list_by_home_region_default_response_error import TopologyListByHomeRegionDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of TopologyListByHomeRegionDefaultResponseError from a JSON string
topology_list_by_home_region_default_response_error_instance = TopologyListByHomeRegionDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(TopologyListByHomeRegionDefaultResponseError.to_json())

# convert the object into a dict
topology_list_by_home_region_default_response_error_dict = topology_list_by_home_region_default_response_error_instance.to_dict()
# create an instance of TopologyListByHomeRegionDefaultResponseError from a dict
topology_list_by_home_region_default_response_error_from_dict = TopologyListByHomeRegionDefaultResponseError.from_dict(topology_list_by_home_region_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


