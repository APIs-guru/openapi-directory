# EndUserPing


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**AccountWithTags**](AccountWithTags.md) |  | [optional] 
**return_url** | **str** |  | [optional] 
**user** | [**EndUserPingUser**](EndUserPingUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.end_user_ping import EndUserPing

# TODO update the JSON string below
json = "{}"
# create an instance of EndUserPing from a JSON string
end_user_ping_instance = EndUserPing.from_json(json)
# print the JSON string representation of the object
print(EndUserPing.to_json())

# convert the object into a dict
end_user_ping_dict = end_user_ping_instance.to_dict()
# create an instance of EndUserPing from a dict
end_user_ping_from_dict = EndUserPing.from_dict(end_user_ping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


