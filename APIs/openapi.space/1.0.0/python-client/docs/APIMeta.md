# APIMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] 
**description** | **str** |  | [optional] 
**modified** | **datetime** |  | [optional] 
**name** | **str** |  | [optional] 
**owner** | **str** |  | [optional] 
**swagger** | **object** | An optional Swagger spec. Not included in meta lists. | [optional] 
**url** | **str** |  | [optional] 
**versions** | **List[object]** |  | [optional] 

## Example

```python
from openapi_client.models.api_meta import APIMeta

# TODO update the JSON string below
json = "{}"
# create an instance of APIMeta from a JSON string
api_meta_instance = APIMeta.from_json(json)
# print the JSON string representation of the object
print(APIMeta.to_json())

# convert the object into a dict
api_meta_dict = api_meta_instance.to_dict()
# create an instance of APIMeta from a dict
api_meta_from_dict = APIMeta.from_dict(api_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


