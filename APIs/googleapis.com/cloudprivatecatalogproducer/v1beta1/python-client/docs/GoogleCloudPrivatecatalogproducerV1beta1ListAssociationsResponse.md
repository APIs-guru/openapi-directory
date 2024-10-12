# GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**associations** | [**List[GoogleCloudPrivatecatalogproducerV1beta1Association]**](GoogleCloudPrivatecatalogproducerV1beta1Association.md) | The returned &#x60;Association&#x60; resources from the list call. | [optional] 
**next_page_token** | **str** | A pagination token returned from a previous call to &#x60;ListAssociations&#x60; that indicates where the listing should continue from. This field is optional. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_privatecatalogproducer_v1beta1_list_associations_response import GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse from a JSON string
google_cloud_privatecatalogproducer_v1beta1_list_associations_response_instance = GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse.to_json())

# convert the object into a dict
google_cloud_privatecatalogproducer_v1beta1_list_associations_response_dict = google_cloud_privatecatalogproducer_v1beta1_list_associations_response_instance.to_dict()
# create an instance of GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse from a dict
google_cloud_privatecatalogproducer_v1beta1_list_associations_response_from_dict = GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse.from_dict(google_cloud_privatecatalogproducer_v1beta1_list_associations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


