# GoogleCloudApigeeV1APIProductAssociation

APIProductAssociation has the API product and its administrative state association.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiproduct** | **str** | API product to be associated with the credential. | [optional] 
**status** | **str** | The API product credential associated status. Valid values are &#x60;approved&#x60; or &#x60;revoked&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_api_product_association import GoogleCloudApigeeV1APIProductAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1APIProductAssociation from a JSON string
google_cloud_apigee_v1_api_product_association_instance = GoogleCloudApigeeV1APIProductAssociation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1APIProductAssociation.to_json())

# convert the object into a dict
google_cloud_apigee_v1_api_product_association_dict = google_cloud_apigee_v1_api_product_association_instance.to_dict()
# create an instance of GoogleCloudApigeeV1APIProductAssociation from a dict
google_cloud_apigee_v1_api_product_association_from_dict = GoogleCloudApigeeV1APIProductAssociation.from_dict(google_cloud_apigee_v1_api_product_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


