# UpdateConnectionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Connection**](Connection.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.update_connection_response import UpdateConnectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateConnectionResponse from a JSON string
update_connection_response_instance = UpdateConnectionResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateConnectionResponse.to_json())

# convert the object into a dict
update_connection_response_dict = update_connection_response_instance.to_dict()
# create an instance of UpdateConnectionResponse from a dict
update_connection_response_from_dict = UpdateConnectionResponse.from_dict(update_connection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


