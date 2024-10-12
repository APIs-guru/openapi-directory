# PublicIPPrefixPropertiesFormatIpTagsInner

Contains the IpTag associated with the object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_tag_type** | **str** | The IP tag type. Example: FirstPartyUsage. | [optional] 
**tag** | **str** | The value of the IP tag associated with the public IP. Example: SQL. | [optional] 

## Example

```python
from openapi_client.models.public_ip_prefix_properties_format_ip_tags_inner import PublicIPPrefixPropertiesFormatIpTagsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PublicIPPrefixPropertiesFormatIpTagsInner from a JSON string
public_ip_prefix_properties_format_ip_tags_inner_instance = PublicIPPrefixPropertiesFormatIpTagsInner.from_json(json)
# print the JSON string representation of the object
print(PublicIPPrefixPropertiesFormatIpTagsInner.to_json())

# convert the object into a dict
public_ip_prefix_properties_format_ip_tags_inner_dict = public_ip_prefix_properties_format_ip_tags_inner_instance.to_dict()
# create an instance of PublicIPPrefixPropertiesFormatIpTagsInner from a dict
public_ip_prefix_properties_format_ip_tags_inner_from_dict = PublicIPPrefixPropertiesFormatIpTagsInner.from_dict(public_ip_prefix_properties_format_ip_tags_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


