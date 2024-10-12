# LogFlowDateTimeProperty

Date and time property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **datetime** | Date time property value. | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.log_flow_date_time_property import LogFlowDateTimeProperty

# TODO update the JSON string below
json = "{}"
# create an instance of LogFlowDateTimeProperty from a JSON string
log_flow_date_time_property_instance = LogFlowDateTimeProperty.from_json(json)
# print the JSON string representation of the object
print(LogFlowDateTimeProperty.to_json())

# convert the object into a dict
log_flow_date_time_property_dict = log_flow_date_time_property_instance.to_dict()
# create an instance of LogFlowDateTimeProperty from a dict
log_flow_date_time_property_from_dict = LogFlowDateTimeProperty.from_dict(log_flow_date_time_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


