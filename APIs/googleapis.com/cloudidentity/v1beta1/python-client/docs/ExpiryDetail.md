# ExpiryDetail

The `MembershipRole` expiry details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expire_time** | **str** | The time at which the &#x60;MembershipRole&#x60; will expire. | [optional] 

## Example

```python
from openapi_client.models.expiry_detail import ExpiryDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ExpiryDetail from a JSON string
expiry_detail_instance = ExpiryDetail.from_json(json)
# print the JSON string representation of the object
print(ExpiryDetail.to_json())

# convert the object into a dict
expiry_detail_dict = expiry_detail_instance.to_dict()
# create an instance of ExpiryDetail from a dict
expiry_detail_from_dict = ExpiryDetail.from_dict(expiry_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


