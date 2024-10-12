# ApplicationGatewaySslPolicy

Application gateway SSL policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled_ssl_protocols** | **List[str]** | SSL protocols to be disabled on application gateway. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_ssl_policy import ApplicationGatewaySslPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewaySslPolicy from a JSON string
application_gateway_ssl_policy_instance = ApplicationGatewaySslPolicy.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewaySslPolicy.to_json())

# convert the object into a dict
application_gateway_ssl_policy_dict = application_gateway_ssl_policy_instance.to_dict()
# create an instance of ApplicationGatewaySslPolicy from a dict
application_gateway_ssl_policy_from_dict = ApplicationGatewaySslPolicy.from_dict(application_gateway_ssl_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


