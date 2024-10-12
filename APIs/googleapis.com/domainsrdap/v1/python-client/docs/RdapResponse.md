# RdapResponse

Response to a general RDAP query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **List[str]** | Error description. | [optional] 
**error_code** | **int** | Error HTTP code. Example: \&quot;501\&quot;. | [optional] 
**json_response** | [**HttpBody**](HttpBody.md) |  | [optional] 
**lang** | **str** | Error language code. Error response info fields are defined in [section 6 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-6). | [optional] 
**notices** | [**List[Notice]**](Notice.md) | Notices applying to this response. | [optional] 
**rdap_conformance** | **List[str]** | RDAP conformance level. | [optional] 
**title** | **str** | Error title. | [optional] 

## Example

```python
from openapi_client.models.rdap_response import RdapResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RdapResponse from a JSON string
rdap_response_instance = RdapResponse.from_json(json)
# print the JSON string representation of the object
print(RdapResponse.to_json())

# convert the object into a dict
rdap_response_dict = rdap_response_instance.to_dict()
# create an instance of RdapResponse from a dict
rdap_response_from_dict = RdapResponse.from_dict(rdap_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


