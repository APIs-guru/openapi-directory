# StatusDTO

Imideate response for long running api call.             

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** | Reference id for status endpoint              | [optional] 
**status_text** | **str** | Status of API Call              | [optional] 
**url** | **str** | Relative url for stauts check              | [optional] 

## Example

```python
from openapi_client.models.status_dto import StatusDTO

# TODO update the JSON string below
json = "{}"
# create an instance of StatusDTO from a JSON string
status_dto_instance = StatusDTO.from_json(json)
# print the JSON string representation of the object
print(StatusDTO.to_json())

# convert the object into a dict
status_dto_dict = status_dto_instance.to_dict()
# create an instance of StatusDTO from a dict
status_dto_from_dict = StatusDTO.from_dict(status_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


