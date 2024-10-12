# ImageOccurrence

Details of the derived image portion of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_resource_url** | **str** | Output only. This contains the base image URL for the derived image occurrence. | [optional] 
**distance** | **int** | Output only. The number of layers by which this image differs from the associated image basis. | [optional] 
**fingerprint** | [**Fingerprint**](Fingerprint.md) |  | [optional] 
**layer_info** | [**List[Layer]**](Layer.md) | This contains layer-specific metadata, if populated it has length \&quot;distance\&quot; and is ordered with [distance] being the layer immediately following the base image and [1] being the final layer. | [optional] 

## Example

```python
from openapi_client.models.image_occurrence import ImageOccurrence

# TODO update the JSON string below
json = "{}"
# create an instance of ImageOccurrence from a JSON string
image_occurrence_instance = ImageOccurrence.from_json(json)
# print the JSON string representation of the object
print(ImageOccurrence.to_json())

# convert the object into a dict
image_occurrence_dict = image_occurrence_instance.to_dict()
# create an instance of ImageOccurrence from a dict
image_occurrence_from_dict = ImageOccurrence.from_dict(image_occurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


