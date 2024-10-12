# RequestEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | Content (in base64 encoding) | [optional] 
**header** | [**List[Header]**](Header.md) | Header | [optional] 
**method** | **str** | Method | [optional] 
**path** | **str** | Path (with query) | [optional] 

## Example

```python
from openapi_client.models.request_entity import RequestEntity

# TODO update the JSON string below
json = "{}"
# create an instance of RequestEntity from a JSON string
request_entity_instance = RequestEntity.from_json(json)
# print the JSON string representation of the object
print(RequestEntity.to_json())

# convert the object into a dict
request_entity_dict = request_entity_instance.to_dict()
# create an instance of RequestEntity from a dict
request_entity_from_dict = RequestEntity.from_dict(request_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


