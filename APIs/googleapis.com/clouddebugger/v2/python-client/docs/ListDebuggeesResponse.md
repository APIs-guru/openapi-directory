# ListDebuggeesResponse

Response for listing debuggees.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debuggees** | [**List[Debuggee]**](Debuggee.md) | List of debuggees accessible to the calling user. The fields &#x60;debuggee.id&#x60; and &#x60;description&#x60; are guaranteed to be set. The &#x60;description&#x60; field is a human readable field provided by agents and can be displayed to users. | [optional] 

## Example

```python
from openapi_client.models.list_debuggees_response import ListDebuggeesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDebuggeesResponse from a JSON string
list_debuggees_response_instance = ListDebuggeesResponse.from_json(json)
# print the JSON string representation of the object
print(ListDebuggeesResponse.to_json())

# convert the object into a dict
list_debuggees_response_dict = list_debuggees_response_instance.to_dict()
# create an instance of ListDebuggeesResponse from a dict
list_debuggees_response_from_dict = ListDebuggeesResponse.from_dict(list_debuggees_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


