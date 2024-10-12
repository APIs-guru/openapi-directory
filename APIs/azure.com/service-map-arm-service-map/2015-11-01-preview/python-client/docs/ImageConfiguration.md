# ImageConfiguration

Describes the VM image of a machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offering** | **str** | Offering of the VM image. | [optional] 
**publisher** | **str** | Publisher of the VM image. | [optional] 
**sku** | **str** | SKU of the VM image. | [optional] 
**version** | **str** | Version of the VM image. | [optional] 

## Example

```python
from openapi_client.models.image_configuration import ImageConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ImageConfiguration from a JSON string
image_configuration_instance = ImageConfiguration.from_json(json)
# print the JSON string representation of the object
print(ImageConfiguration.to_json())

# convert the object into a dict
image_configuration_dict = image_configuration_instance.to_dict()
# create an instance of ImageConfiguration from a dict
image_configuration_from_dict = ImageConfiguration.from_dict(image_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


