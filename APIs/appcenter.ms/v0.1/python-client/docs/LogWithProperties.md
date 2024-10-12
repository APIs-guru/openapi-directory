# LogWithProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **Dict[str, str]** | Additional key/value pair parameters.  | [optional] 
**device** | [**AnalyticsGenericLogFlow200ResponseLogsInnerDevice**](AnalyticsGenericLogFlow200ResponseLogsInnerDevice.md) |  | 
**install_id** | **str** | Install ID.  | 
**timestamp** | **datetime** | Log creation timestamp.  | 
**type** | **str** | Log type.  | 

## Example

```python
from openapi_client.models.log_with_properties import LogWithProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LogWithProperties from a JSON string
log_with_properties_instance = LogWithProperties.from_json(json)
# print the JSON string representation of the object
print(LogWithProperties.to_json())

# convert the object into a dict
log_with_properties_dict = log_with_properties_instance.to_dict()
# create an instance of LogWithProperties from a dict
log_with_properties_from_dict = LogWithProperties.from_dict(log_with_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


