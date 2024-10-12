# Requisition

RequisitionSerializer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_selection** | **bool** | option to enable account selection view for the end user | [optional] [default to False]
**accounts** | **List[str]** | array of account IDs retrieved within a scope of this requisition | [optional] [readonly] 
**agreement** | **str** | EUA associated with this requisition | [optional] 
**created** | **datetime** | The date &amp; time at which the requisition was created. | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 
**institution_id** | **str** | an Institution ID for this Requisition | 
**link** | **str** | link to initiate authorization with Institution | [optional] [readonly] [default to 'https://ob.nordigen.com/psd2/start/3fa85f64-5717-4562-b3fc-2c963f66afa6/{$INSTITUTION_ID}']
**redirect** | **str** | redirect URL to your application after end-user authorization with ASPSP | 
**redirect_immediate** | **bool** | enable redirect back to the client after account list received | [optional] [default to False]
**reference** | **str** | additional ID to identify the end user | [optional] 
**ssn** | **str** | optional SSN field to verify ownership of the account | [optional] 
**status** | [**Status1c5Enum**](Status1c5Enum.md) | status of this requisition | [optional] [readonly] 
**user_language** | **str** | A two-letter country code (ISO 639-1) | [optional] 

## Example

```python
from openapi_client.models.requisition import Requisition

# TODO update the JSON string below
json = "{}"
# create an instance of Requisition from a JSON string
requisition_instance = Requisition.from_json(json)
# print the JSON string representation of the object
print(Requisition.to_json())

# convert the object into a dict
requisition_dict = requisition_instance.to_dict()
# create an instance of Requisition from a dict
requisition_from_dict = Requisition.from_dict(requisition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


