# NewEntityRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.new_entity_request import NewEntityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of NewEntityRequest from a JSON string
new_entity_request_instance = NewEntityRequest.from_json(json)
# print the JSON string representation of the object
print(NewEntityRequest.to_json())

# convert the object into a dict
new_entity_request_dict = new_entity_request_instance.to_dict()
# create an instance of NewEntityRequest from a dict
new_entity_request_from_dict = NewEntityRequest.from_dict(new_entity_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


