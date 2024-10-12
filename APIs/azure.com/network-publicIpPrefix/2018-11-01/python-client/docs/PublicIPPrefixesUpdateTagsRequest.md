# PublicIPPrefixesUpdateTagsRequest

Tags object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.public_ip_prefixes_update_tags_request import PublicIPPrefixesUpdateTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PublicIPPrefixesUpdateTagsRequest from a JSON string
public_ip_prefixes_update_tags_request_instance = PublicIPPrefixesUpdateTagsRequest.from_json(json)
# print the JSON string representation of the object
print(PublicIPPrefixesUpdateTagsRequest.to_json())

# convert the object into a dict
public_ip_prefixes_update_tags_request_dict = public_ip_prefixes_update_tags_request_instance.to_dict()
# create an instance of PublicIPPrefixesUpdateTagsRequest from a dict
public_ip_prefixes_update_tags_request_from_dict = PublicIPPrefixesUpdateTagsRequest.from_dict(public_ip_prefixes_update_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


