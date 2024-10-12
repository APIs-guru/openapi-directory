# ApiVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added** | **datetime** | Timestamp when the version was added | 
**external_docs** | **object** | Copy of &#x60;externalDocs&#x60; section from OpenAPI definition | [optional] 
**info** | **object** | Copy of &#x60;info&#x60; section from OpenAPI definition | 
**link** | **str** | Link to the individual API entry for this API | [optional] 
**openapi_ver** | **str** | The value of the &#x60;openapi&#x60; or &#x60;swagger&#x60; property of the source definition | 
**swagger_url** | **str** | URL to OpenAPI definition in JSON format | 
**swagger_yaml_url** | **str** | URL to OpenAPI definition in YAML format | 
**updated** | **datetime** | Timestamp when the version was updated | 

## Example

```python
from openapi_client.models.api_version import ApiVersion

# TODO update the JSON string below
json = "{}"
# create an instance of ApiVersion from a JSON string
api_version_instance = ApiVersion.from_json(json)
# print the JSON string representation of the object
print(ApiVersion.to_json())

# convert the object into a dict
api_version_dict = api_version_instance.to_dict()
# create an instance of ApiVersion from a dict
api_version_from_dict = ApiVersion.from_dict(api_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


