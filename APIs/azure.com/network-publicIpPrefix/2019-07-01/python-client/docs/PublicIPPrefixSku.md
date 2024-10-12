# PublicIPPrefixSku

SKU of a public IP prefix.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of a public IP prefix SKU. | [optional] 

## Example

```python
from openapi_client.models.public_ip_prefix_sku import PublicIPPrefixSku

# TODO update the JSON string below
json = "{}"
# create an instance of PublicIPPrefixSku from a JSON string
public_ip_prefix_sku_instance = PublicIPPrefixSku.from_json(json)
# print the JSON string representation of the object
print(PublicIPPrefixSku.to_json())

# convert the object into a dict
public_ip_prefix_sku_dict = public_ip_prefix_sku_instance.to_dict()
# create an instance of PublicIPPrefixSku from a dict
public_ip_prefix_sku_from_dict = PublicIPPrefixSku.from_dict(public_ip_prefix_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


