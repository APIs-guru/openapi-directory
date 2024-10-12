# TextAnalyticsError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | 
**details** | [**List[TextAnalyticsError]**](TextAnalyticsError.md) | Details about specific errors that led to this reported error. | [optional] 
**inner_error** | [**InnerError**](InnerError.md) |  | [optional] 
**message** | **str** | Error message. | 
**target** | **str** | Error target. | [optional] 

## Example

```python
from openapi_client.models.text_analytics_error import TextAnalyticsError

# TODO update the JSON string below
json = "{}"
# create an instance of TextAnalyticsError from a JSON string
text_analytics_error_instance = TextAnalyticsError.from_json(json)
# print the JSON string representation of the object
print(TextAnalyticsError.to_json())

# convert the object into a dict
text_analytics_error_dict = text_analytics_error_instance.to_dict()
# create an instance of TextAnalyticsError from a dict
text_analytics_error_from_dict = TextAnalyticsError.from_dict(text_analytics_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


