# RegisterParameters

Parameters required to register a new domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability** | **str** | Indicates whether the domain is available for registration. This value is accurate when obtained by calling &#x60;RetrieveRegisterParameters&#x60;, but is approximate when obtained by calling &#x60;SearchDomains&#x60;. | [optional] 
**domain_name** | **str** | The domain name. Unicode domain names are expressed in Punycode format. | [optional] 
**domain_notices** | **List[str]** | Notices about special properties of the domain. | [optional] 
**supported_privacy** | **List[str]** | Contact privacy options that the domain supports. | [optional] 
**yearly_price** | [**Money**](Money.md) |  | [optional] 

## Example

```python
from openapi_client.models.register_parameters import RegisterParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RegisterParameters from a JSON string
register_parameters_instance = RegisterParameters.from_json(json)
# print the JSON string representation of the object
print(RegisterParameters.to_json())

# convert the object into a dict
register_parameters_dict = register_parameters_instance.to_dict()
# create an instance of RegisterParameters from a dict
register_parameters_from_dict = RegisterParameters.from_dict(register_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


