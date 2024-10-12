# LogFlowStringProperty

String property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | String property value. | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.log_flow_string_property import LogFlowStringProperty

# TODO update the JSON string below
json = "{}"
# create an instance of LogFlowStringProperty from a JSON string
log_flow_string_property_instance = LogFlowStringProperty.from_json(json)
# print the JSON string representation of the object
print(LogFlowStringProperty.to_json())

# convert the object into a dict
log_flow_string_property_dict = log_flow_string_property_instance.to_dict()
# create an instance of LogFlowStringProperty from a dict
log_flow_string_property_from_dict = LogFlowStringProperty.from_dict(log_flow_string_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


