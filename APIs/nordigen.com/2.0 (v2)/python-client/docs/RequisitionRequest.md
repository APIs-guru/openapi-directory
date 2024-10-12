# RequisitionRequest

RequisitionSerializer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_selection** | **bool** | option to enable account selection view for the end user | [optional] [default to False]
**agreement** | **str** | EUA associated with this requisition | [optional] 
**institution_id** | **str** | an Institution ID for this Requisition | 
**redirect** | **str** | redirect URL to your application after end-user authorization with ASPSP | 
**redirect_immediate** | **bool** | enable redirect back to the client after account list received | [optional] [default to False]
**reference** | **str** | additional ID to identify the end user | [optional] 
**ssn** | **str** | optional SSN field to verify ownership of the account | [optional] 
**user_language** | **str** | A two-letter country code (ISO 639-1) | [optional] 

## Example

```python
from openapi_client.models.requisition_request import RequisitionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RequisitionRequest from a JSON string
requisition_request_instance = RequisitionRequest.from_json(json)
# print the JSON string representation of the object
print(RequisitionRequest.to_json())

# convert the object into a dict
requisition_request_dict = requisition_request_instance.to_dict()
# create an instance of RequisitionRequest from a dict
requisition_request_from_dict = RequisitionRequest.from_dict(requisition_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


