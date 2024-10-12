# GoogleCloudApigeeV1Reference

A Reference configuration. References must refer to a keystore that also exists in the parent environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. A human-readable description of this reference. | [optional] 
**name** | **str** | Required. The resource id of this reference. Values must match the regular expression [\\w\\s\\-.]+. | [optional] 
**refers** | **str** | Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent environment and is of the given resource_type. | [optional] 
**resource_type** | **str** | The type of resource referred to by this reference. Valid values are &#39;KeyStore&#39; or &#39;TrustStore&#39;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_reference import GoogleCloudApigeeV1Reference

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Reference from a JSON string
google_cloud_apigee_v1_reference_instance = GoogleCloudApigeeV1Reference.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Reference.to_json())

# convert the object into a dict
google_cloud_apigee_v1_reference_dict = google_cloud_apigee_v1_reference_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Reference from a dict
google_cloud_apigee_v1_reference_from_dict = GoogleCloudApigeeV1Reference.from_dict(google_cloud_apigee_v1_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


