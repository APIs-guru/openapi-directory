# ListMonitoredResourceDescriptorsResponse

The ListMonitoredResourceDescriptors response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. | [optional] 
**resource_descriptors** | [**List[MonitoredResourceDescriptor]**](MonitoredResourceDescriptor.md) | The monitored resource descriptors that are available to this project and that match filter, if present. | [optional] 

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


