# GDPRValidationRequest

A request containing a set of release ids to validate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hockeyapp_release_ids** | **List[int]** | a list of release ids to validate (HA flow) | [optional] 
**release_ids** | **List[int]** | a list of release ids to validate (AC flow) | 
**release_upload_ids** | **List[str]** | a list of release uploads ids to validate | [optional] 

## Example

```python
from openapi_client.models.gdpr_validation_request import GDPRValidationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GDPRValidationRequest from a JSON string
gdpr_validation_request_instance = GDPRValidationRequest.from_json(json)
# print the JSON string representation of the object
print(GDPRValidationRequest.to_json())

# convert the object into a dict
gdpr_validation_request_dict = gdpr_validation_request_instance.to_dict()
# create an instance of GDPRValidationRequest from a dict
gdpr_validation_request_from_dict = GDPRValidationRequest.from_dict(gdpr_validation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


