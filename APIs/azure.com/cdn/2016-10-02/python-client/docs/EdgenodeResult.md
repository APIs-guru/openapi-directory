# EdgenodeResult

Result of the request to list CDN edgenodes. It contains a list of ip address group and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of edgenode list results if there are any. | [optional] 
**value** | [**List[EdgeNode]**](EdgeNode.md) | Edge node of CDN service. | [optional] 

## Example

```python
from openapi_client.models.edgenode_result import EdgenodeResult

# TODO update the JSON string below
json = "{}"
# create an instance of EdgenodeResult from a JSON string
edgenode_result_instance = EdgenodeResult.from_json(json)
# print the JSON string representation of the object
print(EdgenodeResult.to_json())

# convert the object into a dict
edgenode_result_dict = edgenode_result_instance.to_dict()
# create an instance of EdgenodeResult from a dict
edgenode_result_from_dict = EdgenodeResult.from_dict(edgenode_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


