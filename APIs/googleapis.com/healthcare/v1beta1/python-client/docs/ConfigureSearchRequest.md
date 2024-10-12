# ConfigureSearchRequest

Request to configure the search parameters for the specified FHIR store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical_urls** | **List[str]** | The canonical URLs of the search parameters that are intended to be used for the FHIR store. See https://www.hl7.org/fhir/references.html#canonical for explanation on FHIR canonical urls | [optional] 
**validate_only** | **bool** | If &#x60;validate_only&#x60; is set to true, the method will compile all the search parameters without actually setting the search config for the store and triggering the reindex. | [optional] 

## Example

```python
from openapi_client.models.configure_search_request import ConfigureSearchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigureSearchRequest from a JSON string
configure_search_request_instance = ConfigureSearchRequest.from_json(json)
# print the JSON string representation of the object
print(ConfigureSearchRequest.to_json())

# convert the object into a dict
configure_search_request_dict = configure_search_request_instance.to_dict()
# create an instance of ConfigureSearchRequest from a dict
configure_search_request_from_dict = ConfigureSearchRequest.from_dict(configure_search_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


