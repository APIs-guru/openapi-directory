# GoogleCloudApigeeV1AccessRemove

Remove action. For example, \"Remove\" : { \"name\" : \"target.name\", \"success\" : true }

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_access_remove import GoogleCloudApigeeV1AccessRemove

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1AccessRemove from a JSON string
google_cloud_apigee_v1_access_remove_instance = GoogleCloudApigeeV1AccessRemove.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1AccessRemove.to_json())

# convert the object into a dict
google_cloud_apigee_v1_access_remove_dict = google_cloud_apigee_v1_access_remove_instance.to_dict()
# create an instance of GoogleCloudApigeeV1AccessRemove from a dict
google_cloud_apigee_v1_access_remove_from_dict = GoogleCloudApigeeV1AccessRemove.from_dict(google_cloud_apigee_v1_access_remove_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


