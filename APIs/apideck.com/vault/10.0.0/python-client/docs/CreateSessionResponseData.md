# CreateSessionResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_token** | **str** |  | [readonly] 
**session_uri** | **str** |  | [readonly] 

## Example

```python
from openapi_client.models.create_session_response_data import CreateSessionResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSessionResponseData from a JSON string
create_session_response_data_instance = CreateSessionResponseData.from_json(json)
# print the JSON string representation of the object
print(CreateSessionResponseData.to_json())

# convert the object into a dict
create_session_response_data_dict = create_session_response_data_instance.to_dict()
# create an instance of CreateSessionResponseData from a dict
create_session_response_data_from_dict = CreateSessionResponseData.from_dict(create_session_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


