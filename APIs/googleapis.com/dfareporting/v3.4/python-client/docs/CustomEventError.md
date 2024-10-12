# CustomEventError

The error code and description for a custom event that failed to insert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The error code. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#customEventError\&quot;. | [optional] 
**message** | **str** | A description of the error. | [optional] 

## Example

```python
from openapi_client.models.custom_event_error import CustomEventError

# TODO update the JSON string below
json = "{}"
# create an instance of CustomEventError from a JSON string
custom_event_error_instance = CustomEventError.from_json(json)
# print the JSON string representation of the object
print(CustomEventError.to_json())

# convert the object into a dict
custom_event_error_dict = custom_event_error_instance.to_dict()
# create an instance of CustomEventError from a dict
custom_event_error_from_dict = CustomEventError.from_dict(custom_event_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


