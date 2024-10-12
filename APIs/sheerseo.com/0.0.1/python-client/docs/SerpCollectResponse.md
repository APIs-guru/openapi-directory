# SerpCollectResponse

Describes the result of uploading an image resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tasks** | [**List[SerpCollectResponseTasksInner]**](SerpCollectResponseTasksInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.serp_collect_response import SerpCollectResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SerpCollectResponse from a JSON string
serp_collect_response_instance = SerpCollectResponse.from_json(json)
# print the JSON string representation of the object
print(SerpCollectResponse.to_json())

# convert the object into a dict
serp_collect_response_dict = serp_collect_response_instance.to_dict()
# create an instance of SerpCollectResponse from a dict
serp_collect_response_from_dict = SerpCollectResponse.from_dict(serp_collect_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


