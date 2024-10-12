# ClaimIntoOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**licenses** | [**List[ClaimIntoOrganizationRequestLicensesInner]**](ClaimIntoOrganizationRequestLicensesInner.md) | The licenses that should be claimed | [optional] 
**orders** | **List[str]** | The numbers of the orders that should be claimed | [optional] 
**serials** | **List[str]** | The serials of the devices that should be claimed | [optional] 

## Example

```python
from openapi_client.models.claim_into_organization_request import ClaimIntoOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ClaimIntoOrganizationRequest from a JSON string
claim_into_organization_request_instance = ClaimIntoOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(ClaimIntoOrganizationRequest.to_json())

# convert the object into a dict
claim_into_organization_request_dict = claim_into_organization_request_instance.to_dict()
# create an instance of ClaimIntoOrganizationRequest from a dict
claim_into_organization_request_from_dict = ClaimIntoOrganizationRequest.from_dict(claim_into_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


