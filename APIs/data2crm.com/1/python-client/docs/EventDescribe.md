# EventDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_describe import EventDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of EventDescribe from a JSON string
event_describe_instance = EventDescribe.from_json(json)
# print the JSON string representation of the object
print(EventDescribe.to_json())

# convert the object into a dict
event_describe_dict = event_describe_instance.to_dict()
# create an instance of EventDescribe from a dict
event_describe_from_dict = EventDescribe.from_dict(event_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


