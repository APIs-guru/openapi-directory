# ImageReference

The OS image reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer** | **str** | Offer of the image. | 
**publisher** | **str** | Publisher of the image. | 
**sku** | **str** | SKU of the image. | 
**version** | **str** | Version of the image. | [optional] 
**virtual_machine_image_id** | **str** | The ARM resource identifier of the virtual machine image for the compute nodes. This is of the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}. The virtual machine image must be in the same region and subscription as the cluster. For information about the firewall settings for the Batch node agent to communicate with the Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration. Note, you need to provide publisher, offer and sku of the base OS image of which the custom image has been derived from. | [optional] 

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


