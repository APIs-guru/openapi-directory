# UpdateDealRequest

Request message for updating the deal at the given revision number.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deal** | [**Deal**](Deal.md) |  | [optional] 
**update_mask** | **str** | List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path \&quot;*\&quot; can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. | [optional] 

## Example

```python
from openapi_client.models.update_deal_request import UpdateDealRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDealRequest from a JSON string
update_deal_request_instance = UpdateDealRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDealRequest.to_json())

# convert the object into a dict
update_deal_request_dict = update_deal_request_instance.to_dict()
# create an instance of UpdateDealRequest from a dict
update_deal_request_from_dict = UpdateDealRequest.from_dict(update_deal_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


