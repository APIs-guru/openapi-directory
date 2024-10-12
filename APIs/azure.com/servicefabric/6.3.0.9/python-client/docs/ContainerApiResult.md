# ContainerApiResult

Container API result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** | container API result body | [optional] 
**content_encoding** | **str** | HTTP content encoding | [optional] 
**content_type** | **str** | HTTP content type | [optional] 
**status** | **int** | HTTP status code returned by the target container API | 

## Example

```python
from openapi_client.models.container_api_result import ContainerApiResult

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerApiResult from a JSON string
container_api_result_instance = ContainerApiResult.from_json(json)
# print the JSON string representation of the object
print(ContainerApiResult.to_json())

# convert the object into a dict
container_api_result_dict = container_api_result_instance.to_dict()
# create an instance of ContainerApiResult from a dict
container_api_result_from_dict = ContainerApiResult.from_dict(container_api_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


