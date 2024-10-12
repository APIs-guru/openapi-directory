# GoogleCloudApigeeV1Properties

Message for compatibility with legacy Edge specification for Java Properties object in JSON.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_property** | [**List[GoogleCloudApigeeV1Property]**](GoogleCloudApigeeV1Property.md) | List of all properties in the object | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_properties import GoogleCloudApigeeV1Properties

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Properties from a JSON string
google_cloud_apigee_v1_properties_instance = GoogleCloudApigeeV1Properties.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Properties.to_json())

# convert the object into a dict
google_cloud_apigee_v1_properties_dict = google_cloud_apigee_v1_properties_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Properties from a dict
google_cloud_apigee_v1_properties_from_dict = GoogleCloudApigeeV1Properties.from_dict(google_cloud_apigee_v1_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


