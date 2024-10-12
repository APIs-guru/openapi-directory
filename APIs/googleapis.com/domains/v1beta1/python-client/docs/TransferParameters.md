# TransferParameters

Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations). Parameters required to transfer a domain from another registrar.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_registrar** | **str** | The registrar that currently manages the domain. | [optional] 
**current_registrar_uri** | **str** | The URL of the registrar that currently manages the domain. | [optional] 
**domain_name** | **str** | The domain name. Unicode domain names are expressed in Punycode format. | [optional] 
**name_servers** | **List[str]** | The name servers that currently store the configuration of the domain. | [optional] 
**supported_privacy** | **List[str]** | Contact privacy options that the domain supports. | [optional] 
**transfer_lock_state** | **str** | Indicates whether the domain is protected by a transfer lock. For a transfer to succeed, this must show &#x60;UNLOCKED&#x60;. To unlock a domain, go to its current registrar. | [optional] 
**yearly_price** | [**Money**](Money.md) |  | [optional] 

## Example

```python
from openapi_client.models.transfer_parameters import TransferParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TransferParameters from a JSON string
transfer_parameters_instance = TransferParameters.from_json(json)
# print the JSON string representation of the object
print(TransferParameters.to_json())

# convert the object into a dict
transfer_parameters_dict = transfer_parameters_instance.to_dict()
# create an instance of TransferParameters from a dict
transfer_parameters_from_dict = TransferParameters.from_dict(transfer_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


