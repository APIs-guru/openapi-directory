# LogFlowBooleanProperty

Boolean property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **bool** | Boolean property value. | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.log_flow_boolean_property import LogFlowBooleanProperty

# TODO update the JSON string below
json = "{}"
# create an instance of LogFlowBooleanProperty from a JSON string
log_flow_boolean_property_instance = LogFlowBooleanProperty.from_json(json)
# print the JSON string representation of the object
print(LogFlowBooleanProperty.to_json())

# convert the object into a dict
log_flow_boolean_property_dict = log_flow_boolean_property_instance.to_dict()
# create an instance of LogFlowBooleanProperty from a dict
log_flow_boolean_property_from_dict = LogFlowBooleanProperty.from_dict(log_flow_boolean_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


