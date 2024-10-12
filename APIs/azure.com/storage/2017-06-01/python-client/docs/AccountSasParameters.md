# AccountSasParameters

The parameters to list SAS credentials of a storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_to_sign** | **str** | The key to sign the account SAS token with. | [optional] 
**signed_expiry** | **datetime** | The time at which the shared access signature becomes invalid. | 
**signed_ip** | **str** | An IP address or a range of IP addresses from which to accept requests. | [optional] 
**signed_permission** | **str** | The signed permissions for the account SAS. Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a), Create (c), Update (u) and Process (p). | 
**signed_protocol** | **str** | The protocol permitted for a request made with the account SAS. | [optional] 
**signed_resource_types** | **str** | The signed resource types that are accessible with the account SAS. Service (s): Access to service-level APIs; Container (c): Access to container-level APIs; Object (o): Access to object-level APIs for blobs, queue messages, table entities, and files. | 
**signed_services** | **str** | The signed services accessible with the account SAS. Possible values include: Blob (b), Queue (q), Table (t), File (f). | 
**signed_start** | **datetime** | The time at which the SAS becomes valid. | [optional] 

## Example

```python
from openapi_client.models.account_sas_parameters import AccountSasParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AccountSasParameters from a JSON string
account_sas_parameters_instance = AccountSasParameters.from_json(json)
# print the JSON string representation of the object
print(AccountSasParameters.to_json())

# convert the object into a dict
account_sas_parameters_dict = account_sas_parameters_instance.to_dict()
# create an instance of AccountSasParameters from a dict
account_sas_parameters_from_dict = AccountSasParameters.from_dict(account_sas_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


