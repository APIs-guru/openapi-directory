# Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** |  | [optional] 
**headers** | **Dict[str, str]** |  | [optional] 
**method** | **str** |  | [optional] 
**parameters** | **List[str]** |  | [optional] 
**parent_ids** | **List[str]** |  | [optional] 
**request_template** | [**RequestTemplate**](RequestTemplate.md) |  | [optional] 
**resource** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.request import Request

# TODO update the JSON string below
json = "{}"
# create an instance of Request from a JSON string
request_instance = Request.from_json(json)
# print the JSON string representation of the object
print(Request.to_json())

# convert the object into a dict
request_dict = request_instance.to_dict()
# create an instance of Request from a dict
request_from_dict = Request.from_dict(request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


