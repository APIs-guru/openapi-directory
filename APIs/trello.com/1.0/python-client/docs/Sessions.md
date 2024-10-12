# Sessions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_board** | **str** | The id of the board you&amp;#39;re viewing.  Boards with no viewers will not get updates about members&amp;#39; statuses. | [optional] 
**status** | **str** | One of: active, disconnected or idle | [optional] 

## Example

```python
from openapi_client.models.sessions import Sessions

# TODO update the JSON string below
json = "{}"
# create an instance of Sessions from a JSON string
sessions_instance = Sessions.from_json(json)
# print the JSON string representation of the object
print(Sessions.to_json())

# convert the object into a dict
sessions_dict = sessions_instance.to_dict()
# create an instance of Sessions from a dict
sessions_from_dict = Sessions.from_dict(sessions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


