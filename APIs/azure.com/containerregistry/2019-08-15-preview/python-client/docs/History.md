# History

A list of unstructured historical data for v1 compatibility

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v1_compatibility** | **str** | The raw v1 compatibility information | [optional] 

## Example

```python
from openapi_client.models.history import History

# TODO update the JSON string below
json = "{}"
# create an instance of History from a JSON string
history_instance = History.from_json(json)
# print the JSON string representation of the object
print(History.to_json())

# convert the object into a dict
history_dict = history_instance.to_dict()
# create an instance of History from a dict
history_from_dict = History.from_dict(history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


