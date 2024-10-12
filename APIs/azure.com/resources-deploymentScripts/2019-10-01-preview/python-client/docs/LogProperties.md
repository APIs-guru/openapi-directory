# LogProperties

Script log properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log** | **str** | Script execution logs in text format. | [optional] [readonly] 

## Example

```python
from openapi_client.models.log_properties import LogProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LogProperties from a JSON string
log_properties_instance = LogProperties.from_json(json)
# print the JSON string representation of the object
print(LogProperties.to_json())

# convert the object into a dict
log_properties_dict = log_properties_instance.to_dict()
# create an instance of LogProperties from a dict
log_properties_from_dict = LogProperties.from_dict(log_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


