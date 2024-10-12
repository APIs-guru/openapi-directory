# EdifactMessageFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_filter_type** | [**MessageFilterType**](MessageFilterType.md) |  | [optional] 

## Example

```python
from openapi_client.models.edifact_message_filter import EdifactMessageFilter

# TODO update the JSON string below
json = "{}"
# create an instance of EdifactMessageFilter from a JSON string
edifact_message_filter_instance = EdifactMessageFilter.from_json(json)
# print the JSON string representation of the object
print(EdifactMessageFilter.to_json())

# convert the object into a dict
edifact_message_filter_dict = edifact_message_filter_instance.to_dict()
# create an instance of EdifactMessageFilter from a dict
edifact_message_filter_from_dict = EdifactMessageFilter.from_dict(edifact_message_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


