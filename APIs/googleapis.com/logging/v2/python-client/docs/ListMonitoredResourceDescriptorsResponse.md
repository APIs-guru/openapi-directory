# ListMonitoredResourceDescriptorsResponse

Result returned from ListMonitoredResourceDescriptors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken. | [optional] 
**resource_descriptors** | [**List[MonitoredResourceDescriptor]**](MonitoredResourceDescriptor.md) | A list of resource descriptors. | [optional] 

## Example

```python
from openapi_client.models.list_monitored_resource_descriptors_response import ListMonitoredResourceDescriptorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMonitoredResourceDescriptorsResponse from a JSON string
list_monitored_resource_descriptors_response_instance = ListMonitoredResourceDescriptorsResponse.from_json(json)
# print the JSON string representation of the object
print(ListMonitoredResourceDescriptorsResponse.to_json())

# convert the object into a dict
list_monitored_resource_descriptors_response_dict = list_monitored_resource_descriptors_response_instance.to_dict()
# create an instance of ListMonitoredResourceDescriptorsResponse from a dict
list_monitored_resource_descriptors_response_from_dict = ListMonitoredResourceDescriptorsResponse.from_dict(list_monitored_resource_descriptors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


