# GoogleCloudApigeeV1AccessSet

Set action. For example, \"Set\" : { \"name\" : \"target.name\", \"success\" : true, \"value\" : \"default\" }

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**success** | **bool** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_access_set import GoogleCloudApigeeV1AccessSet

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1AccessSet from a JSON string
google_cloud_apigee_v1_access_set_instance = GoogleCloudApigeeV1AccessSet.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1AccessSet.to_json())

# convert the object into a dict
google_cloud_apigee_v1_access_set_dict = google_cloud_apigee_v1_access_set_instance.to_dict()
# create an instance of GoogleCloudApigeeV1AccessSet from a dict
google_cloud_apigee_v1_access_set_from_dict = GoogleCloudApigeeV1AccessSet.from_dict(google_cloud_apigee_v1_access_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


