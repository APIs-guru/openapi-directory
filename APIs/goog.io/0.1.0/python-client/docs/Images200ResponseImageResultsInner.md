# Images200ResponseImageResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | [**Images200ResponseImageResultsInnerImage**](Images200ResponseImageResultsInnerImage.md) |  | [optional] 
**link** | [**Images200ResponseImageResultsInnerLink**](Images200ResponseImageResultsInnerLink.md) |  | [optional] 

## Example

```python
from openapi_client.models.images200_response_image_results_inner import Images200ResponseImageResultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of Images200ResponseImageResultsInner from a JSON string
images200_response_image_results_inner_instance = Images200ResponseImageResultsInner.from_json(json)
# print the JSON string representation of the object
print(Images200ResponseImageResultsInner.to_json())

# convert the object into a dict
images200_response_image_results_inner_dict = images200_response_image_results_inner_instance.to_dict()
# create an instance of Images200ResponseImageResultsInner from a dict
images200_response_image_results_inner_from_dict = Images200ResponseImageResultsInner.from_dict(images200_response_image_results_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


