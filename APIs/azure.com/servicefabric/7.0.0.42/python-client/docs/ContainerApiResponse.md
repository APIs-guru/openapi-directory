# ContainerApiResponse

Response body that wraps container API result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_api_result** | [**ContainerApiResult**](ContainerApiResult.md) |  | 

## Example

```python
from openapi_client.models.container_api_response import ContainerApiResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerApiResponse from a JSON string
container_api_response_instance = ContainerApiResponse.from_json(json)
# print the JSON string representation of the object
print(ContainerApiResponse.to_json())

# convert the object into a dict
container_api_response_dict = container_api_response_instance.to_dict()
# create an instance of ContainerApiResponse from a dict
container_api_response_from_dict = ContainerApiResponse.from_dict(container_api_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


