# GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_product_name** | **str** | The resource name of the destination product that is copied to. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_copy_product_request import GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest from a JSON string
google_cloud_privatecatalogproducer_v1beta1_copy_product_request_instance = GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest.to_json())

# convert the object into a dict
google_cloud_privatecatalogproducer_v1beta1_copy_product_request_dict = google_cloud_privatecatalogproducer_v1beta1_copy_product_request_instance.to_dict()
# create an instance of GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest from a dict
google_cloud_privatecatalogproducer_v1beta1_copy_product_request_from_dict = GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest.from_dict(google_cloud_privatecatalogproducer_v1beta1_copy_product_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


