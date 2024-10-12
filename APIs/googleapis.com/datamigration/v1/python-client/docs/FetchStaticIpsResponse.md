# FetchStaticIpsResponse

Response message for a 'FetchStaticIps' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**static_ips** | **List[str]** | List of static IPs. | [optional] 

## Example

```python
from openapi_client.models.fetch_static_ips_response import FetchStaticIpsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchStaticIpsResponse from a JSON string
fetch_static_ips_response_instance = FetchStaticIpsResponse.from_json(json)
# print the JSON string representation of the object
print(FetchStaticIpsResponse.to_json())

# convert the object into a dict
fetch_static_ips_response_dict = fetch_static_ips_response_instance.to_dict()
# create an instance of FetchStaticIpsResponse from a dict
fetch_static_ips_response_from_dict = FetchStaticIpsResponse.from_dict(fetch_static_ips_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


