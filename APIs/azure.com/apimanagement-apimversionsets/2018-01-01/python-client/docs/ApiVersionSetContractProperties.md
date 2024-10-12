# ApiVersionSetContractProperties

Properties of an API Version Set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of API Version Set | 
**versioning_scheme** | **str** | An value that determines where the API Version identifer will be located in a HTTP request. | 
**description** | **str** | Description of API Version Set. | [optional] 
**version_header_name** | **str** | Name of HTTP header parameter that indicates the API Version if versioningScheme is set to &#x60;header&#x60;. | [optional] 
**version_query_name** | **str** | Name of query parameter that indicates the API Version if versioningScheme is set to &#x60;query&#x60;. | [optional] 

## Example

```python
from openapi_client.models.api_version_set_contract_properties import ApiVersionSetContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiVersionSetContractProperties from a JSON string
api_version_set_contract_properties_instance = ApiVersionSetContractProperties.from_json(json)
# print the JSON string representation of the object
print(ApiVersionSetContractProperties.to_json())

# convert the object into a dict
api_version_set_contract_properties_dict = api_version_set_contract_properties_instance.to_dict()
# create an instance of ApiVersionSetContractProperties from a dict
api_version_set_contract_properties_from_dict = ApiVersionSetContractProperties.from_dict(api_version_set_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


