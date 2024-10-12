# SafeSearchAnnotation

Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adult** | **str** | Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities. | [optional] 
**medical** | **str** | Likelihood that this is a medical image. | [optional] 
**racy** | **str** | Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas. | [optional] 
**spoof** | **str** | Spoof likelihood. The likelihood that an modification was made to the image&#39;s canonical version to make it appear funny or offensive. | [optional] 
**violence** | **str** | Likelihood that this image contains violent content. Violent content may include death, serious harm, or injury to individuals or groups of individuals. | [optional] 

## Example

```python
from openapi_client.models.safe_search_annotation import SafeSearchAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of SafeSearchAnnotation from a JSON string
safe_search_annotation_instance = SafeSearchAnnotation.from_json(json)
# print the JSON string representation of the object
print(SafeSearchAnnotation.to_json())

# convert the object into a dict
safe_search_annotation_dict = safe_search_annotation_instance.to_dict()
# create an instance of SafeSearchAnnotation from a dict
safe_search_annotation_from_dict = SafeSearchAnnotation.from_dict(safe_search_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


