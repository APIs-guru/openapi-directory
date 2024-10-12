# EndpointDisabledEventData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** |  | 
**app_uid** | **str** | Optional unique identifier for the application | [optional] 
**endpoint_id** | **str** |  | 
**endpoint_uid** | **str** | Optional unique identifier for the endpoint | [optional] 
**fail_since** | **datetime** |  | 

## Example

```python
from openapi_client.models.endpoint_disabled_event_data import EndpointDisabledEventData

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointDisabledEventData from a JSON string
endpoint_disabled_event_data_instance = EndpointDisabledEventData.from_json(json)
# print the JSON string representation of the object
print(EndpointDisabledEventData.to_json())

# convert the object into a dict
endpoint_disabled_event_data_dict = endpoint_disabled_event_data_instance.to_dict()
# create an instance of EndpointDisabledEventData from a dict
endpoint_disabled_event_data_from_dict = EndpointDisabledEventData.from_dict(endpoint_disabled_event_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


