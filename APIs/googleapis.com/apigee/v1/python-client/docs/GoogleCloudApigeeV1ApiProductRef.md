# GoogleCloudApigeeV1ApiProductRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiproduct** | **str** | Name of the API product. | [optional] 
**status** | **str** | Status of the API product. Valid values are &#x60;approved&#x60; or &#x60;revoked&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_api_product_ref import GoogleCloudApigeeV1ApiProductRef

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ApiProductRef from a JSON string
google_cloud_apigee_v1_api_product_ref_instance = GoogleCloudApigeeV1ApiProductRef.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ApiProductRef.to_json())

# convert the object into a dict
google_cloud_apigee_v1_api_product_ref_dict = google_cloud_apigee_v1_api_product_ref_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ApiProductRef from a dict
google_cloud_apigee_v1_api_product_ref_from_dict = GoogleCloudApigeeV1ApiProductRef.from_dict(google_cloud_apigee_v1_api_product_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


