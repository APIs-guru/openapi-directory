# SasPortalCustomer

Entity representing a SAS customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. Name of the organization that the customer entity represents. | [optional] 
**name** | **str** | Output only. Resource name of the customer. | [optional] 
**sas_user_ids** | **List[str]** | User IDs used by the devices belonging to this customer. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_customer import SasPortalCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalCustomer from a JSON string
sas_portal_customer_instance = SasPortalCustomer.from_json(json)
# print the JSON string representation of the object
print(SasPortalCustomer.to_json())

# convert the object into a dict
sas_portal_customer_dict = sas_portal_customer_instance.to_dict()
# create an instance of SasPortalCustomer from a dict
sas_portal_customer_from_dict = SasPortalCustomer.from_dict(sas_portal_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


