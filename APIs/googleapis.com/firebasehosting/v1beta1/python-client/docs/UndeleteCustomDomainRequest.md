# UndeleteCustomDomainRequest

The request sent to `UndeleteCustomDomain`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A tag that represents the state of the &#x60;CustomDomain&#x60; as you know it. If present, the supplied tag must match the current value on your &#x60;CustomDomain&#x60;, or the request fails. | [optional] 
**validate_only** | **bool** | If true, Hosting validates that it&#39;s possible to complete your request but doesn&#39;t actually delete the &#x60;CustomDomain&#x60;. | [optional] 

## Example

```python
from openapi_client.models.undelete_custom_domain_request import UndeleteCustomDomainRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UndeleteCustomDomainRequest from a JSON string
undelete_custom_domain_request_instance = UndeleteCustomDomainRequest.from_json(json)
# print the JSON string representation of the object
print(UndeleteCustomDomainRequest.to_json())

# convert the object into a dict
undelete_custom_domain_request_dict = undelete_custom_domain_request_instance.to_dict()
# create an instance of UndeleteCustomDomainRequest from a dict
undelete_custom_domain_request_from_dict = UndeleteCustomDomainRequest.from_dict(undelete_custom_domain_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


