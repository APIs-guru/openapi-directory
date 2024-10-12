# RequestEntityRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | Content (in base64 encoding) | [optional] 
**header** | [**List[Header]**](Header.md) | Header | [optional] 
**status_code** | **int** | Status Code | [optional] 

## Example

```python
from openapi_client.models.request_entity_relation import RequestEntityRelation

# TODO update the JSON string below
json = "{}"
# create an instance of RequestEntityRelation from a JSON string
request_entity_relation_instance = RequestEntityRelation.from_json(json)
# print the JSON string representation of the object
print(RequestEntityRelation.to_json())

# convert the object into a dict
request_entity_relation_dict = request_entity_relation_instance.to_dict()
# create an instance of RequestEntityRelation from a dict
request_entity_relation_from_dict = RequestEntityRelation.from_dict(request_entity_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


