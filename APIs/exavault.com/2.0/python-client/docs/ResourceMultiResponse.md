# ResourceMultiResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[ResourceMultiResponseResponsesInner]**](ResourceMultiResponseResponsesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.resource_multi_response import ResourceMultiResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceMultiResponse from a JSON string
resource_multi_response_instance = ResourceMultiResponse.from_json(json)
# print the JSON string representation of the object
print(ResourceMultiResponse.to_json())

# convert the object into a dict
resource_multi_response_dict = resource_multi_response_instance.to_dict()
# create an instance of ResourceMultiResponse from a dict
resource_multi_response_from_dict = ResourceMultiResponse.from_dict(resource_multi_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


