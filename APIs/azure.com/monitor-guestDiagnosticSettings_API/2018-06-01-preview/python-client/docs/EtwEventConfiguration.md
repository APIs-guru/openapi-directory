# EtwEventConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** |  | [optional] 
**id** | **int** |  | 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.etw_event_configuration import EtwEventConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of EtwEventConfiguration from a JSON string
etw_event_configuration_instance = EtwEventConfiguration.from_json(json)
# print the JSON string representation of the object
print(EtwEventConfiguration.to_json())

# convert the object into a dict
etw_event_configuration_dict = etw_event_configuration_instance.to_dict()
# create an instance of EtwEventConfiguration from a dict
etw_event_configuration_from_dict = EtwEventConfiguration.from_dict(etw_event_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


