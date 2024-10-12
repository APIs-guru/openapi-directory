# ListMetricDescriptorsResponse

The ListMetricDescriptors response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_descriptors** | [**List[MetricDescriptor]**](MetricDescriptor.md) | The metric descriptors that are available to the project and that match the value of filter, if present. | [optional] 
**next_page_token** | **str** | If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. | [optional] 

## Example

```python
from openapi_client.models.list_metric_descriptors_response import ListMetricDescriptorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMetricDescriptorsResponse from a JSON string
list_metric_descriptors_response_instance = ListMetricDescriptorsResponse.from_json(json)
# print the JSON string representation of the object
print(ListMetricDescriptorsResponse.to_json())

# convert the object into a dict
list_metric_descriptors_response_dict = list_metric_descriptors_response_instance.to_dict()
# create an instance of ListMetricDescriptorsResponse from a dict
list_metric_descriptors_response_from_dict = ListMetricDescriptorsResponse.from_dict(list_metric_descriptors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


