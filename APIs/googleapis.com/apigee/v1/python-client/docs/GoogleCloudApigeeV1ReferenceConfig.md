# GoogleCloudApigeeV1ReferenceConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the reference in the following format: &#x60;organizations/{org}/environments/{env}/references/{reference}&#x60; | [optional] 
**resource_name** | **str** | Name of the referenced resource in the following format: &#x60;organizations/{org}/environments/{env}/keystores/{keystore}&#x60; Only references to keystore resources are supported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_reference_config import GoogleCloudApigeeV1ReferenceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ReferenceConfig from a JSON string
google_cloud_apigee_v1_reference_config_instance = GoogleCloudApigeeV1ReferenceConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ReferenceConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_reference_config_dict = google_cloud_apigee_v1_reference_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ReferenceConfig from a dict
google_cloud_apigee_v1_reference_config_from_dict = GoogleCloudApigeeV1ReferenceConfig.from_dict(google_cloud_apigee_v1_reference_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


