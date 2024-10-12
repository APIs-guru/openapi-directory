# ImageTemplateDistributor

Generic distribution object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_tags** | **Dict[str, str]** | Tags that will be applied to the artifact once it has been created/updated by the distributor. | [optional] 
**run_output_name** | **str** | The name to be used for the associated RunOutput. | 
**type** | **str** | Type of distribution. | 

## Example

```python
from openapi_client.models.image_template_distributor import ImageTemplateDistributor

# TODO update the JSON string below
json = "{}"
# create an instance of ImageTemplateDistributor from a JSON string
image_template_distributor_instance = ImageTemplateDistributor.from_json(json)
# print the JSON string representation of the object
print(ImageTemplateDistributor.to_json())

# convert the object into a dict
image_template_distributor_dict = image_template_distributor_instance.to_dict()
# create an instance of ImageTemplateDistributor from a dict
image_template_distributor_from_dict = ImageTemplateDistributor.from_dict(image_template_distributor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


