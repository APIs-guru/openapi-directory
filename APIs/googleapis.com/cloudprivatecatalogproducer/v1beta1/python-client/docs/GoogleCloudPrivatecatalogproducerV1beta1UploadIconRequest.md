# GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**icon** | **bytearray** | The raw icon bytes user-supplied to be uploaded to the product. The format of the icon can only be PNG or JPEG. The minimum allowed dimensions are 130x130 pixels and the maximum dimensions are 10000x10000 pixels. Required. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_upload_icon_request import GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest from a JSON string
google_cloud_privatecatalogproducer_v1beta1_upload_icon_request_instance = GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest.to_json())

# convert the object into a dict
google_cloud_privatecatalogproducer_v1beta1_upload_icon_request_dict = google_cloud_privatecatalogproducer_v1beta1_upload_icon_request_instance.to_dict()
# create an instance of GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest from a dict
google_cloud_privatecatalogproducer_v1beta1_upload_icon_request_from_dict = GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest.from_dict(google_cloud_privatecatalogproducer_v1beta1_upload_icon_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


