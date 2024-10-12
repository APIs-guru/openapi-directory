# Api


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_reference_url** | **str** | Link to the API reference of the API. | [optional] 
**categories** | **List[str]** | List of categories the API belongs to. | [optional] 
**description** | **str** | Description of the API. | [optional] 
**events** | **List[str]** | List of event types this API supports. | [optional] 
**id** | **str** | ID of the API. | [optional] [readonly] 
**name** | **str** | Name of the API. | [optional] 
**postman_collection_id** | **str** | ID of the Postman collection of the API. | [optional] 
**resources** | [**List[ApiResourcesInner]**](ApiResourcesInner.md) | List of resources supported in this API. | [optional] 
**spec_url** | **str** | Link to the latest OpenAPI specification of the API. | [optional] 
**status** | [**ApiStatus**](ApiStatus.md) |  | [optional] 
**type** | **str** | Indicates whether the API is a Unified API. If unified_api is false, the API is a Platform API. | [optional] 

## Example

```python
from openapi_client.models.api import Api

# TODO update the JSON string below
json = "{}"
# create an instance of Api from a JSON string
api_instance = Api.from_json(json)
# print the JSON string representation of the object
print(Api.to_json())

# convert the object into a dict
api_dict = api_instance.to_dict()
# create an instance of Api from a dict
api_from_dict = Api.from_dict(api_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


