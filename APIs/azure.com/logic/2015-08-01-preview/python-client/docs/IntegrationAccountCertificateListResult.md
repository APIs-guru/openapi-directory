# IntegrationAccountCertificateListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[IntegrationAccountCertificate]**](IntegrationAccountCertificate.md) | The list of integration account certificates. | [optional] 

## Example

```python
from openapi_client.models.integration_account_certificate_list_result import IntegrationAccountCertificateListResult

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountCertificateListResult from a JSON string
integration_account_certificate_list_result_instance = IntegrationAccountCertificateListResult.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountCertificateListResult.to_json())

# convert the object into a dict
integration_account_certificate_list_result_dict = integration_account_certificate_list_result_instance.to_dict()
# create an instance of IntegrationAccountCertificateListResult from a dict
integration_account_certificate_list_result_from_dict = IntegrationAccountCertificateListResult.from_dict(integration_account_certificate_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


