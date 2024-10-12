# SearchRangeRequest

Request to search for an unused range within allocated ranges.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_prefix_length** | **int** | Required. The prefix length of the IP range. Use usual CIDR range notation. For example, &#39;30&#39; to find unused x.x.x.x/30 CIDR range. Actual range will be determined using allocated range for the consumer peered network and returned in the result. | [optional] 
**network** | **str** | Network name in the consumer project. This network must have been already peered with a shared VPC network using CreateConnection method. Must be in a form &#39;projects/{project}/global/networks/{network}&#39;. {project} is a project number, as in &#39;12345&#39; {network} is network name. | [optional] 

## Example

```python
from openapi_client.models.search_range_request import SearchRangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchRangeRequest from a JSON string
search_range_request_instance = SearchRangeRequest.from_json(json)
# print the JSON string representation of the object
print(SearchRangeRequest.to_json())

# convert the object into a dict
search_range_request_dict = search_range_request_instance.to_dict()
# create an instance of SearchRangeRequest from a dict
search_range_request_from_dict = SearchRangeRequest.from_dict(search_range_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


