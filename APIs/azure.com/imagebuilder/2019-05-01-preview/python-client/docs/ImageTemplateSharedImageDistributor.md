# ImageTemplateSharedImageDistributor

Distribute via Shared Image Gallery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gallery_image_id** | **str** | Resource Id of the Shared Image Gallery image | 
**replication_regions** | **List[str]** | A list of regions that the image will be replicated to | 

## Example

```python
from openapi_client.models.image_template_shared_image_distributor import ImageTemplateSharedImageDistributor

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplateSharedImageDistributor from a JSON string
image_template_shared_image_distributor_instance = ImageTemplateSharedImageDistributor.from_json(json)
# print the JSON string representation of the object
print(ImageTemplateSharedImageDistributor.to_json())

# convert the object into a dict
image_template_shared_image_distributor_dict = image_template_shared_image_distributor_instance.to_dict()
# create an instance of ImageTemplateSharedImageDistributor from a dict
image_template_shared_image_distributor_from_dict = ImageTemplateSharedImageDistributor.from_dict(image_template_shared_image_distributor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


