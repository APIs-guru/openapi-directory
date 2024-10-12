# WebDetection

Relevant information for the image from the Internet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**best_guess_labels** | [**List[WebLabel]**](WebLabel.md) | The service&#39;s best guess as to the topic of the request image. Inferred from similar images on the open web. | [optional] 
**full_matching_images** | [**List[WebImage]**](WebImage.md) | Fully matching images from the Internet. Can include resized copies of the query image. | [optional] 
**pages_with_matching_images** | [**List[WebPage]**](WebPage.md) | Web pages containing the matching images from the Internet. | [optional] 
**partial_matching_images** | [**List[WebImage]**](WebImage.md) | Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops. | [optional] 
**visually_similar_images** | [**List[WebImage]**](WebImage.md) | The visually similar image results. | [optional] 
**web_entities** | [**List[WebEntity]**](WebEntity.md) | Deduced entities from similar images on the Internet. | [optional] 

## Example

```python
from openapi_client.models.web_detection import WebDetection

# TODO update the JSON string below
json = "{}"
# create an instance of WebDetection from a JSON string
web_detection_instance = WebDetection.from_json(json)
# print the JSON string representation of the object
print(WebDetection.to_json())

# convert the object into a dict
web_detection_dict = web_detection_instance.to_dict()
# create an instance of WebDetection from a dict
web_detection_from_dict = WebDetection.from_dict(web_detection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


