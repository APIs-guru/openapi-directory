# CustomDomainListResult

Result of the request to list custom domains. It contains a list of custom domain objects and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of custom domain objects if there are any. | [optional] 
**value** | [**List[CustomDomain]**](CustomDomain.md) | List of CDN CustomDomains within an endpoint. | [optional] 

## Example

```python
from openapi_client.models.custom_domain_list_result import CustomDomainListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDomainListResult from a JSON string
custom_domain_list_result_instance = CustomDomainListResult.from_json(json)
# print the JSON string representation of the object
print(CustomDomainListResult.to_json())

# convert the object into a dict
custom_domain_list_result_dict = custom_domain_list_result_instance.to_dict()
# create an instance of CustomDomainListResult from a dict
custom_domain_list_result_from_dict = CustomDomainListResult.from_dict(custom_domain_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


