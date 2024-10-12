# GoogleCloudApigeeV1ResourceConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location of the resource as a URI. | [optional] 
**name** | **str** | Resource name in the following format: &#x60;organizations/{org}/environments/{env}/resourcefiles/{type}/{file}/revisions/{rev}&#x60; Only environment-scoped resource files are supported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_resource_config import GoogleCloudApigeeV1ResourceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ResourceConfig from a JSON string
google_cloud_apigee_v1_resource_config_instance = GoogleCloudApigeeV1ResourceConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ResourceConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_resource_config_dict = google_cloud_apigee_v1_resource_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ResourceConfig from a dict
google_cloud_apigee_v1_resource_config_from_dict = GoogleCloudApigeeV1ResourceConfig.from_dict(google_cloud_apigee_v1_resource_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


