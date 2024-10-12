# ResourceResponse

Response object for resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Resource**](Resource.md) |  | [optional] 
**included** | [**List[ResourceCollectionResponseIncludedInner]**](ResourceCollectionResponseIncludedInner.md) |  | [optional] 
**response_status** | **int** | Http status code of the response.  | [optional] 

## Example

```python
from openapi_client.models.resource_response import ResourceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceResponse from a JSON string
resource_response_instance = ResourceResponse.from_json(json)
# print the JSON string representation of the object
print(ResourceResponse.to_json())

# convert the object into a dict
resource_response_dict = resource_response_instance.to_dict()
# create an instance of ResourceResponse from a dict
resource_response_from_dict = ResourceResponse.from_dict(resource_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


