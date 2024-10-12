# EventDefinitionListResponse

A ListDefinitions response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[EventDefinition]**](EventDefinition.md) | The event definitions. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#eventDefinitionListResponse&#x60;. | [optional] 
**next_page_token** | **str** | The pagination token for the next page of results. | [optional] 

## Example

```python
from openapi_client.models.event_definition_list_response import EventDefinitionListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EventDefinitionListResponse from a JSON string
event_definition_list_response_instance = EventDefinitionListResponse.from_json(json)
# print the JSON string representation of the object
print(EventDefinitionListResponse.to_json())

# convert the object into a dict
event_definition_list_response_dict = event_definition_list_response_instance.to_dict()
# create an instance of EventDefinitionListResponse from a dict
event_definition_list_response_from_dict = EventDefinitionListResponse.from_dict(event_definition_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


