# BuiltImage

An image built by the pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | **str** | Docker Registry 2.0 digest. | [optional] 
**name** | **str** | Name used to push the container image to Google Container Registry, as presented to &#x60;docker push&#x60;. | [optional] 
**push_timing** | [**TimeSpan**](TimeSpan.md) |  | [optional] 

## Example

```python
from openapi_client.models.built_image import BuiltImage

# TODO update the JSON string below
json = "{}"
# create an instance of BuiltImage from a JSON string
built_image_instance = BuiltImage.from_json(json)
# print the JSON string representation of the object
print(BuiltImage.to_json())

# convert the object into a dict
built_image_dict = built_image_instance.to_dict()
# create an instance of BuiltImage from a dict
built_image_from_dict = BuiltImage.from_dict(built_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


