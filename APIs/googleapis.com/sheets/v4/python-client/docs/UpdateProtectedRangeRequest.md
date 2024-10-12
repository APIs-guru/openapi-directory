# UpdateProtectedRangeRequest

Updates an existing protected range with the specified protectedRangeId.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;protectedRange&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. | [optional] 
**protected_range** | [**ProtectedRange**](ProtectedRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_protected_range_request import UpdateProtectedRangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateProtectedRangeRequest from a JSON string
update_protected_range_request_instance = UpdateProtectedRangeRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateProtectedRangeRequest.to_json())

# convert the object into a dict
update_protected_range_request_dict = update_protected_range_request_instance.to_dict()
# create an instance of UpdateProtectedRangeRequest from a dict
update_protected_range_request_from_dict = UpdateProtectedRangeRequest.from_dict(update_protected_range_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


