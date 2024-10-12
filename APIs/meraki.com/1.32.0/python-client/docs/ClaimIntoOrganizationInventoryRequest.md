# ClaimIntoOrganizationInventoryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**licenses** | [**List[ClaimIntoOrganizationInventoryRequestLicensesInner]**](ClaimIntoOrganizationInventoryRequestLicensesInner.md) | The licenses that should be claimed | [optional] 
**orders** | **List[str]** | The numbers of the orders that should be claimed | [optional] 
**serials** | **List[str]** | The serials of the devices that should be claimed | [optional] 

## Example

```python
from openapi_client.models.claim_into_organization_inventory_request import ClaimIntoOrganizationInventoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ClaimIntoOrganizationInventoryRequest from a JSON string
claim_into_organization_inventory_request_instance = ClaimIntoOrganizationInventoryRequest.from_json(json)
# print the JSON string representation of the object
print(ClaimIntoOrganizationInventoryRequest.to_json())

# convert the object into a dict
claim_into_organization_inventory_request_dict = claim_into_organization_inventory_request_instance.to_dict()
# create an instance of ClaimIntoOrganizationInventoryRequest from a dict
claim_into_organization_inventory_request_from_dict = ClaimIntoOrganizationInventoryRequest.from_dict(claim_into_organization_inventory_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


