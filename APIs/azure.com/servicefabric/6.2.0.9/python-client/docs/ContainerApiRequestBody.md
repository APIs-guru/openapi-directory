# ContainerApiRequestBody

parameters for making container API call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | HTTP request body of container REST API | [optional] 
**content_type** | **str** | Content type of container REST API request, defaults to \&quot;application/json\&quot; | [optional] 
**http_verb** | **str** | HTTP verb of container REST API, defaults to \&quot;GET\&quot; | [optional] 
**uri_path** | **str** | URI path of container REST API | 

## Example

```python
from openapi_client.models.container_api_request_body import ContainerApiRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerApiRequestBody from a JSON string
container_api_request_body_instance = ContainerApiRequestBody.from_json(json)
# print the JSON string representation of the object
print(ContainerApiRequestBody.to_json())

# convert the object into a dict
container_api_request_body_dict = container_api_request_body_instance.to_dict()
# create an instance of ContainerApiRequestBody from a dict
container_api_request_body_from_dict = ContainerApiRequestBody.from_dict(container_api_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


