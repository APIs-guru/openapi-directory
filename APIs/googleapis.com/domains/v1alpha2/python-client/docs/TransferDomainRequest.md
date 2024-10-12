# TransferDomainRequest

Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations). Request for the `TransferDomain` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_code** | [**AuthorizationCode**](AuthorizationCode.md) |  | [optional] 
**contact_notices** | **List[str]** | The list of contact notices that you acknowledge. The notices needed here depend on the values specified in &#x60;registration.contact_settings&#x60;. | [optional] 
**registration** | [**Registration**](Registration.md) |  | [optional] 
**validate_only** | **bool** | Validate the request without actually transferring the domain. | [optional] 
**yearly_price** | [**Money**](Money.md) |  | [optional] 

## Example

```python
from openapi_client.models.transfer_domain_request import TransferDomainRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TransferDomainRequest from a JSON string
transfer_domain_request_instance = TransferDomainRequest.from_json(json)
# print the JSON string representation of the object
print(TransferDomainRequest.to_json())

# convert the object into a dict
transfer_domain_request_dict = transfer_domain_request_instance.to_dict()
# create an instance of TransferDomainRequest from a dict
transfer_domain_request_from_dict = TransferDomainRequest.from_dict(transfer_domain_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


