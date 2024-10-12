# X12MessageFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_filter_type** | [**MessageFilterType**](MessageFilterType.md) |  | [optional] 

## Example

```python
from openapi_client.models.x12_message_filter import X12MessageFilter

# TODO update the JSON string below
json = "{}"
# create an instance of X12MessageFilter from a JSON string
x12_message_filter_instance = X12MessageFilter.from_json(json)
# print the JSON string representation of the object
print(X12MessageFilter.to_json())

# convert the object into a dict
x12_message_filter_dict = x12_message_filter_instance.to_dict()
# create an instance of X12MessageFilter from a dict
x12_message_filter_from_dict = X12MessageFilter.from_dict(x12_message_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


