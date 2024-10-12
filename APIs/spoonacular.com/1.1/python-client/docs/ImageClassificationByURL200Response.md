# ImageClassificationByURL200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | 
**probability** | **float** |  | 

## Example

```python
from openapi_client.models.image_classification_by_url200_response import ImageClassificationByURL200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ImageClassificationByURL200Response from a JSON string
image_classification_by_url200_response_instance = ImageClassificationByURL200Response.from_json(json)
# print the JSON string representation of the object
print(ImageClassificationByURL200Response.to_json())

# convert the object into a dict
image_classification_by_url200_response_dict = image_classification_by_url200_response_instance.to_dict()
# create an instance of ImageClassificationByURL200Response from a dict
image_classification_by_url200_response_from_dict = ImageClassificationByURL200Response.from_dict(image_classification_by_url200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


