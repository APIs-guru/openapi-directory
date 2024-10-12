# EndpointDeletedEventData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** |  | 
**app_uid** | **str** | Optional unique identifier for the application | [optional] 
**endpoint_id** | **str** |  | 
**endpoint_uid** | **str** | Optional unique identifier for the endpoint | [optional] 

## Example

```python
from openapi_client.models.endpoint_deleted_event_data import EndpointDeletedEventData

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointDeletedEventData from a JSON string
endpoint_deleted_event_data_instance = EndpointDeletedEventData.from_json(json)
# print the JSON string representation of the object
print(EndpointDeletedEventData.to_json())

# convert the object into a dict
endpoint_deleted_event_data_dict = endpoint_deleted_event_data_instance.to_dict()
# create an instance of EndpointDeletedEventData from a dict
endpoint_deleted_event_data_from_dict = EndpointDeletedEventData.from_dict(endpoint_deleted_event_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


