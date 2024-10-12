# RevertZoneResponse

The result of reverting a zone in a workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**zone** | [**Zone**](Zone.md) |  | [optional] 

## Example

```python
from openapi_client.models.revert_zone_response import RevertZoneResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RevertZoneResponse from a JSON string
revert_zone_response_instance = RevertZoneResponse.from_json(json)
# print the JSON string representation of the object
print(RevertZoneResponse.to_json())

# convert the object into a dict
revert_zone_response_dict = revert_zone_response_instance.to_dict()
# create an instance of RevertZoneResponse from a dict
revert_zone_response_from_dict = RevertZoneResponse.from_dict(revert_zone_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


