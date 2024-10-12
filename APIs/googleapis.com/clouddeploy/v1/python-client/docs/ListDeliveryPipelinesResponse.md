# ListDeliveryPipelinesResponse

The response object from `ListDeliveryPipelines`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_pipelines** | [**List[DeliveryPipeline]**](DeliveryPipeline.md) | The &#x60;DeliveryPipeline&#x60; objects. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_delivery_pipelines_response import ListDeliveryPipelinesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDeliveryPipelinesResponse from a JSON string
list_delivery_pipelines_response_instance = ListDeliveryPipelinesResponse.from_json(json)
# print the JSON string representation of the object
print(ListDeliveryPipelinesResponse.to_json())

# convert the object into a dict
list_delivery_pipelines_response_dict = list_delivery_pipelines_response_instance.to_dict()
# create an instance of ListDeliveryPipelinesResponse from a dict
list_delivery_pipelines_response_from_dict = ListDeliveryPipelinesResponse.from_dict(list_delivery_pipelines_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


