# EntityResultObject

Contains the results of a given document entity create/update or GET request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**EntityObject**](EntityObject.md) |  | 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | 

## Example

```python
from openapi_client.models.entity_result_object import EntityResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of EntityResultObject from a JSON string
entity_result_object_instance = EntityResultObject.from_json(json)
# print the JSON string representation of the object
print(EntityResultObject.to_json())

# convert the object into a dict
entity_result_object_dict = entity_result_object_instance.to_dict()
# create an instance of EntityResultObject from a dict
entity_result_object_from_dict = EntityResultObject.from_dict(entity_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


