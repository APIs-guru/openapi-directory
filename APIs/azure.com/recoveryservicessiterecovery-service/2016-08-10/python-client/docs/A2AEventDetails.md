# A2AEventDetails

Model class for event details of a A2A event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fabric_location** | **str** | The fabric location. | [optional] 
**fabric_name** | **str** | Fabric arm name. | [optional] 
**fabric_object_id** | **str** | The azure vm arm id. | [optional] 
**protected_item_name** | **str** | The protected item arm name. | [optional] 
**remote_fabric_location** | **str** | Remote fabric location. | [optional] 
**remote_fabric_name** | **str** | Remote fabric arm name. | [optional] 

## Example

```python
from openapi_client.models.a2_a_event_details import A2AEventDetails

# TODO update the JSON string below
json = "{}"
# create an instance of A2AEventDetails from a JSON string
a2_a_event_details_instance = A2AEventDetails.from_json(json)
# print the JSON string representation of the object
print(A2AEventDetails.to_json())

# convert the object into a dict
a2_a_event_details_dict = a2_a_event_details_instance.to_dict()
# create an instance of A2AEventDetails from a dict
a2_a_event_details_from_dict = A2AEventDetails.from_dict(a2_a_event_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


