# OwnershipQueryResponseObject

Frankie internal use only.  The result of an /business/ownership/query call as returned by a suitable service connector. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_date** | **datetime** | If a result is provided in this response then this is the date and time the service provided that result.  | [optional] 
**check_id** | **str** |  | [optional] 
**ownership_query_result** | [**OwnershipQueryResultObject**](OwnershipQueryResultObject.md) |  | [optional] 
**provider_check_id** | **str** | Unique identifier provided by the service.  | [optional] 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | [optional] 

## Example

```python
from openapi_client.models.ownership_query_response_object import OwnershipQueryResponseObject

# TODO update the JSON string below
json = "{}"
# create an instance of OwnershipQueryResponseObject from a JSON string
ownership_query_response_object_instance = OwnershipQueryResponseObject.from_json(json)
# print the JSON string representation of the object
print(OwnershipQueryResponseObject.to_json())

# convert the object into a dict
ownership_query_response_object_dict = ownership_query_response_object_instance.to_dict()
# create an instance of OwnershipQueryResponseObject from a dict
ownership_query_response_object_from_dict = OwnershipQueryResponseObject.from_dict(ownership_query_response_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


