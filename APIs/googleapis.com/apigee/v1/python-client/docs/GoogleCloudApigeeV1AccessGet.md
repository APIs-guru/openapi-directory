# GoogleCloudApigeeV1AccessGet

Get action. For example, \"Get\" : { \"name\" : \"target.name\", \"value\" : \"default\" }

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_access_get import GoogleCloudApigeeV1AccessGet

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1AccessGet from a JSON string
google_cloud_apigee_v1_access_get_instance = GoogleCloudApigeeV1AccessGet.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1AccessGet.to_json())

# convert the object into a dict
google_cloud_apigee_v1_access_get_dict = google_cloud_apigee_v1_access_get_instance.to_dict()
# create an instance of GoogleCloudApigeeV1AccessGet from a dict
google_cloud_apigee_v1_access_get_from_dict = GoogleCloudApigeeV1AccessGet.from_dict(google_cloud_apigee_v1_access_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


