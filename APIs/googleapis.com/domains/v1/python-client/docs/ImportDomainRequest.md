# ImportDomainRequest

Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations). Request for the `ImportDomain` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | Required. The domain name. Unicode domain names must be expressed in Punycode format. | [optional] 
**labels** | **Dict[str, str]** | Set of labels associated with the &#x60;Registration&#x60;. | [optional] 

## Example

```python
from openapi_client.models.import_domain_request import ImportDomainRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportDomainRequest from a JSON string
import_domain_request_instance = ImportDomainRequest.from_json(json)
# print the JSON string representation of the object
print(ImportDomainRequest.to_json())

# convert the object into a dict
import_domain_request_dict = import_domain_request_instance.to_dict()
# create an instance of ImportDomainRequest from a dict
import_domain_request_from_dict = ImportDomainRequest.from_dict(import_domain_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


