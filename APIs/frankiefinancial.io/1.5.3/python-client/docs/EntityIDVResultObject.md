# EntityIDVResultObject

Contains the results of a given document entity create/update and IDV token details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicant_id** | **str** | The applicantId is either the same one that was supplied in the request for a fresh token, or a new one. This ID must be supplied along with the token to your SDK so that it knows who any uploaded documents are for.  The latest applicant will also be written to the extraData of the entity as well for safe keeping. Older applicantIds will be overwritten.  | 
**entity** | [**EntityObject**](EntityObject.md) |  | 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | 
**support_two_docs** | **bool** | If the requesting customer can support requesting 2 documents. | [optional] 
**token** | **str** | Token to be used in the SDK to authenticate the applicant and application/referrer.  Tokens are time limited (1 hour) and can only be used with the applicantId supplied.  | 

## Example

```python
from openapi_client.models.entity_idv_result_object import EntityIDVResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of EntityIDVResultObject from a JSON string
entity_idv_result_object_instance = EntityIDVResultObject.from_json(json)
# print the JSON string representation of the object
print(EntityIDVResultObject.to_json())

# convert the object into a dict
entity_idv_result_object_dict = entity_idv_result_object_instance.to_dict()
# create an instance of EntityIDVResultObject from a dict
entity_idv_result_object_from_dict = EntityIDVResultObject.from_dict(entity_idv_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


