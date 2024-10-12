# ImageDetails

Information about the disk image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_part_number** | **str** | The part number is used to bill for software costs. | [optional] 

## Example

```python
from openapi_client.models.image_details import ImageDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ImageDetails from a JSON string
image_details_instance = ImageDetails.from_json(json)
# print the JSON string representation of the object
print(ImageDetails.to_json())

# convert the object into a dict
image_details_dict = image_details_instance.to_dict()
# create an instance of ImageDetails from a dict
image_details_from_dict = ImageDetails.from_dict(image_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


