# CorrelationFilter

Represents the correlation filter expression.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | Content type of the message. | [optional] 
**correlation_id** | **str** | Identifier of the correlation. | [optional] 
**label** | **str** | Application specific label. | [optional] 
**message_id** | **str** | Identifier of the message. | [optional] 
**properties** | **Dict[str, str]** | dictionary object for custom filters | [optional] 
**reply_to** | **str** | Address of the queue to reply to. | [optional] 
**reply_to_session_id** | **str** | Session identifier to reply to. | [optional] 
**requires_preprocessing** | **bool** | Value that indicates whether the rule action requires preprocessing. | [optional] [default to True]
**session_id** | **str** | Session identifier. | [optional] 
**to** | **str** | Address to send to. | [optional] 

## Example

```python
from openapi_client.models.correlation_filter import CorrelationFilter

# TODO update the JSON string below
json = "{}"
# create an instance of CorrelationFilter from a JSON string
correlation_filter_instance = CorrelationFilter.from_json(json)
# print the JSON string representation of the object
print(CorrelationFilter.to_json())

# convert the object into a dict
correlation_filter_dict = correlation_filter_instance.to_dict()
# create an instance of CorrelationFilter from a dict
correlation_filter_from_dict = CorrelationFilter.from_dict(correlation_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


