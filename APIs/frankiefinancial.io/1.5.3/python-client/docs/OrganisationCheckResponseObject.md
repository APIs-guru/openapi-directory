# OrganisationCheckResponseObject

The result of an /business/ownership/query call retrieved via GET /retrieve/response/{requestId} after you receive a notification that the result is ready. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flags** | [**List[EntityFlagObject]**](EntityFlagObject.md) | Used to set additional information flags for this response.  | [optional] 
**organisation_check_id** | **str** | Batch identifier for the KYC/AML check results if any.  | [optional] 
**organisation_check_result** | [**OrganisationCheckResultObject**](OrganisationCheckResultObject.md) |  | [optional] 
**ownership_check_date** | **datetime** | If an ownership result is provided in this response then this is the date and time the service provided that result.  | [optional] 
**ownership_check_id** | **str** | Unique identifier for the ownership check.  | [optional] 
**ownership_query_error** | [**ErrorObject**](ErrorObject.md) |  | [optional] 
**ownership_query_result** | [**OwnershipQueryResultObject**](OwnershipQueryResultObject.md) |  | [optional] 
**report_error** | [**ErrorObject**](ErrorObject.md) |  | [optional] 
**report_result** | [**BusinessReportResultObject**](BusinessReportResultObject.md) |  | [optional] 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | [optional] 
**ubo_response** | [**UBOResponse**](UBOResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.organisation_check_response_object import OrganisationCheckResponseObject

# TODO update the JSON string below
json = "{}"
# create an instance of OrganisationCheckResponseObject from a JSON string
organisation_check_response_object_instance = OrganisationCheckResponseObject.from_json(json)
# print the JSON string representation of the object
print(OrganisationCheckResponseObject.to_json())

# convert the object into a dict
organisation_check_response_object_dict = organisation_check_response_object_instance.to_dict()
# create an instance of OrganisationCheckResponseObject from a dict
organisation_check_response_object_from_dict = OrganisationCheckResponseObject.from_dict(organisation_check_response_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


