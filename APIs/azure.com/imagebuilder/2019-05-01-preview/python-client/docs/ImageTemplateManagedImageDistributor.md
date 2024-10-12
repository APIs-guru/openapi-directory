# ImageTemplateManagedImageDistributor

Distribute as a Managed Disk Image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_id** | **str** | Resource Id of the Managed Disk Image | 
**location** | **str** | Azure location for the image, should match if image already exists | 

## Example

```python
from openapi_client.models.image_template_managed_image_distributor import ImageTemplateManagedImageDistributor

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplateManagedImageDistributor from a JSON string
image_template_managed_image_distributor_instance = ImageTemplateManagedImageDistributor.from_json(json)
# print the JSON string representation of the object
print(ImageTemplateManagedImageDistributor.to_json())

# convert the object into a dict
image_template_managed_image_distributor_dict = image_template_managed_image_distributor_instance.to_dict()
# create an instance of ImageTemplateManagedImageDistributor from a dict
image_template_managed_image_distributor_from_dict = ImageTemplateManagedImageDistributor.from_dict(image_template_managed_image_distributor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


