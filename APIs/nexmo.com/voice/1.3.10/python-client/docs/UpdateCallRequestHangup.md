# UpdateCallRequestHangup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | End the call for the specified UUID | [optional] 

## Example

```python
from openapi_client.models.update_call_request_hangup import UpdateCallRequestHangup

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCallRequestHangup from a JSON string
update_call_request_hangup_instance = UpdateCallRequestHangup.from_json(json)
# print the JSON string representation of the object
print(UpdateCallRequestHangup.to_json())

# convert the object into a dict
update_call_request_hangup_dict = update_call_request_hangup_instance.to_dict()
# create an instance of UpdateCallRequestHangup from a dict
update_call_request_hangup_from_dict = UpdateCallRequestHangup.from_dict(update_call_request_hangup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


