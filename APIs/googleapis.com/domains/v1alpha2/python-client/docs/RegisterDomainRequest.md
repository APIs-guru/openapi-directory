# RegisterDomainRequest

Request for the `RegisterDomain` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_notices** | **List[str]** | The list of contact notices that the caller acknowledges. The notices needed here depend on the values specified in &#x60;registration.contact_settings&#x60;. | [optional] 
**domain_notices** | **List[str]** | The list of domain notices that you acknowledge. Call &#x60;RetrieveRegisterParameters&#x60; to see the notices that need acknowledgement. | [optional] 
**registration** | [**Registration**](Registration.md) |  | [optional] 
**validate_only** | **bool** | When true, only validation is performed, without actually registering the domain. Follows: https://cloud.google.com/apis/design/design_patterns#request_validation | [optional] 
**yearly_price** | [**Money**](Money.md) |  | [optional] 

## Example

```python
from openapi_client.models.register_domain_request import RegisterDomainRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RegisterDomainRequest from a JSON string
register_domain_request_instance = RegisterDomainRequest.from_json(json)
# print the JSON string representation of the object
print(RegisterDomainRequest.to_json())

# convert the object into a dict
register_domain_request_dict = register_domain_request_instance.to_dict()
# create an instance of RegisterDomainRequest from a dict
register_domain_request_from_dict = RegisterDomainRequest.from_dict(register_domain_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


