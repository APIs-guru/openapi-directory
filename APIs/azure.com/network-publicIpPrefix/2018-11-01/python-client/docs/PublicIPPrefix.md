# PublicIPPrefix

Public IP prefix resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | [**PublicIPPrefixPropertiesFormat**](PublicIPPrefixPropertiesFormat.md) |  | [optional] 
**sku** | [**PublicIPPrefixSku**](PublicIPPrefixSku.md) |  | [optional] 
**zones** | **List[str]** | A list of availability zones denoting the IP allocated for the resource needs to come from. | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.public_ip_prefix import PublicIPPrefix

# TODO update the JSON string below
json = "{}"
# create an instance of PublicIPPrefix from a JSON string
public_ip_prefix_instance = PublicIPPrefix.from_json(json)
# print the JSON string representation of the object
print(PublicIPPrefix.to_json())

# convert the object into a dict
public_ip_prefix_dict = public_ip_prefix_instance.to_dict()
# create an instance of PublicIPPrefix from a dict
public_ip_prefix_from_dict = PublicIPPrefix.from_dict(public_ip_prefix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


