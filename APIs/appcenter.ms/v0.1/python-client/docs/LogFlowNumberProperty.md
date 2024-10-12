# LogFlowNumberProperty

Number property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **float** | Number property value. | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.log_flow_number_property import LogFlowNumberProperty

# TODO update the JSON string below
json = "{}"
# create an instance of LogFlowNumberProperty from a JSON string
log_flow_number_property_instance = LogFlowNumberProperty.from_json(json)
# print the JSON string representation of the object
print(LogFlowNumberProperty.to_json())

# convert the object into a dict
log_flow_number_property_dict = log_flow_number_property_instance.to_dict()
# create an instance of LogFlowNumberProperty from a dict
log_flow_number_property_from_dict = LogFlowNumberProperty.from_dict(log_flow_number_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


