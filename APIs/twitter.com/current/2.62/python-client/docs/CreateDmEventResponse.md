# CreateDmEventResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateDmEventResponseData**](CreateDmEventResponseData.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_dm_event_response import CreateDmEventResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDmEventResponse from a JSON string
create_dm_event_response_instance = CreateDmEventResponse.from_json(json)
# print the JSON string representation of the object
print(CreateDmEventResponse.to_json())

# convert the object into a dict
create_dm_event_response_dict = create_dm_event_response_instance.to_dict()
# create an instance of CreateDmEventResponse from a dict
create_dm_event_response_from_dict = CreateDmEventResponse.from_dict(create_dm_event_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


