# GoogleCloudVisionV1p3beta1ProductKeyValue

A product label represented as a key-value pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. | [optional] 
**value** | **str** | The value of the label attached to the product. Cannot be empty and cannot exceed 128 bytes. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p3beta1_product_key_value import GoogleCloudVisionV1p3beta1ProductKeyValue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p3beta1ProductKeyValue from a JSON string
google_cloud_vision_v1p3beta1_product_key_value_instance = GoogleCloudVisionV1p3beta1ProductKeyValue.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p3beta1ProductKeyValue.to_json())

# convert the object into a dict
google_cloud_vision_v1p3beta1_product_key_value_dict = google_cloud_vision_v1p3beta1_product_key_value_instance.to_dict()
# create an instance of GoogleCloudVisionV1p3beta1ProductKeyValue from a dict
google_cloud_vision_v1p3beta1_product_key_value_from_dict = GoogleCloudVisionV1p3beta1ProductKeyValue.from_dict(google_cloud_vision_v1p3beta1_product_key_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


