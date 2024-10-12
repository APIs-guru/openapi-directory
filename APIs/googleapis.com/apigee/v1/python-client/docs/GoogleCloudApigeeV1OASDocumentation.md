# GoogleCloudApigeeV1OASDocumentation

OpenAPI Specification documentation for a catalog item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | Output only. The format of the input specification file contents. | [optional] [readonly] 
**spec** | [**GoogleCloudApigeeV1DocumentationFile**](GoogleCloudApigeeV1DocumentationFile.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_oas_documentation import GoogleCloudApigeeV1OASDocumentation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1OASDocumentation from a JSON string
google_cloud_apigee_v1_oas_documentation_instance = GoogleCloudApigeeV1OASDocumentation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1OASDocumentation.to_json())

# convert the object into a dict
google_cloud_apigee_v1_oas_documentation_dict = google_cloud_apigee_v1_oas_documentation_instance.to_dict()
# create an instance of GoogleCloudApigeeV1OASDocumentation from a dict
google_cloud_apigee_v1_oas_documentation_from_dict = GoogleCloudApigeeV1OASDocumentation.from_dict(google_cloud_apigee_v1_oas_documentation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


