# ImageReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | This property is mutually exclusive with other properties. The virtual machine image must be in the same region and subscription as the Azure Batch account. For information about the firewall settings for Batch node agent to communicate with Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration . | [optional] 
**offer** | **str** | For example, UbuntuServer or WindowsServer. | [optional] 
**publisher** | **str** | For example, Canonical or MicrosoftWindowsServer. | [optional] 
**sku** | **str** | For example, 14.04.0-LTS or 2012-R2-Datacenter. | [optional] 
**version** | **str** | A value of &#39;latest&#39; can be specified to select the latest version of an image. If omitted, the default is &#39;latest&#39;. | [optional] 

## Example

```python
from openapi_client.models.image_reference import ImageReference

# TODO update the JSON string below
json = "{}"
# create an instance of ImageReference from a JSON string
image_reference_instance = ImageReference.from_json(json)
# print the JSON string representation of the object
print(ImageReference.to_json())

# convert the object into a dict
image_reference_dict = image_reference_instance.to_dict()
# create an instance of ImageReference from a dict
image_reference_from_dict = ImageReference.from_dict(image_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


