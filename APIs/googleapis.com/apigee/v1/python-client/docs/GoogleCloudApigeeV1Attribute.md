# GoogleCloudApigeeV1Attribute

Key-value pair to store extra metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | API key of the attribute. | [optional] 
**value** | **str** | Value of the attribute. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_attribute import GoogleCloudApigeeV1Attribute

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Attribute from a JSON string
google_cloud_apigee_v1_attribute_instance = GoogleCloudApigeeV1Attribute.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Attribute.to_json())

# convert the object into a dict
google_cloud_apigee_v1_attribute_dict = google_cloud_apigee_v1_attribute_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Attribute from a dict
google_cloud_apigee_v1_attribute_from_dict = GoogleCloudApigeeV1Attribute.from_dict(google_cloud_apigee_v1_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


