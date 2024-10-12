# AcceptedEntityResultObject

The following fields represent the data you need in order to retrieve the results of the requested function. See the details of the notification API for more. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_id** | **str** | If you&#39;re calling a processing function of some kind, a check number will be issued. This field will only be present if the function you&#39;re calling would normally return a checkId (such as scan, verify, and compare).  | [optional] 
**entity_id** | **str** | When an entity is created/uploaded, or generated from a document scan, it is assigned an entityId. This can then be referenced in subsequent calls if you&#39;re uploading more/updated data.  | [optional] 
**function** | **str** | Short description of the function called.  | [optional] 
**link_url** | **str** | Optional link that can be returned - used by the Push To Mobile service to allow API users to manage the use of the onboarding link themselves.  | [optional] 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | [optional] 

## Example

```python
from openapi_client.models.accepted_entity_result_object import AcceptedEntityResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of AcceptedEntityResultObject from a JSON string
accepted_entity_result_object_instance = AcceptedEntityResultObject.from_json(json)
# print the JSON string representation of the object
print(AcceptedEntityResultObject.to_json())

# convert the object into a dict
accepted_entity_result_object_dict = accepted_entity_result_object_instance.to_dict()
# create an instance of AcceptedEntityResultObject from a dict
accepted_entity_result_object_from_dict = AcceptedEntityResultObject.from_dict(accepted_entity_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


