# GoogleCloudVisionV1p2beta1Property

A `Property` consists of a user-supplied name/value pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the property. | [optional] 
**uint64_value** | **str** | Value of numeric properties. | [optional] 
**value** | **str** | Value of the property. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p2beta1_property import GoogleCloudVisionV1p2beta1Property

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p2beta1Property from a JSON string
google_cloud_vision_v1p2beta1_property_instance = GoogleCloudVisionV1p2beta1Property.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p2beta1Property.to_json())

# convert the object into a dict
google_cloud_vision_v1p2beta1_property_dict = google_cloud_vision_v1p2beta1_property_instance.to_dict()
# create an instance of GoogleCloudVisionV1p2beta1Property from a dict
google_cloud_vision_v1p2beta1_property_from_dict = GoogleCloudVisionV1p2beta1Property.from_dict(google_cloud_vision_v1p2beta1_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


