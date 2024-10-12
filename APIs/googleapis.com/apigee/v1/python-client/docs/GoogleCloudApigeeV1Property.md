# GoogleCloudApigeeV1Property

A single property entry in the Properties message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The property key | [optional] 
**value** | **str** | The property value | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_property import GoogleCloudApigeeV1Property

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Property from a JSON string
google_cloud_apigee_v1_property_instance = GoogleCloudApigeeV1Property.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Property.to_json())

# convert the object into a dict
google_cloud_apigee_v1_property_dict = google_cloud_apigee_v1_property_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Property from a dict
google_cloud_apigee_v1_property_from_dict = GoogleCloudApigeeV1Property.from_dict(google_cloud_apigee_v1_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


