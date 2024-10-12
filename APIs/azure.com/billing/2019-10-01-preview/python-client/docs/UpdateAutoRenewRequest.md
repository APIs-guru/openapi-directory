# UpdateAutoRenewRequest

Request parameters to update auto renew for support product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_renew** | **str** | Request parameters to update auto renew policy a product. | [optional] 

## Example

```python
from openapi_client.models.update_auto_renew_request import UpdateAutoRenewRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAutoRenewRequest from a JSON string
update_auto_renew_request_instance = UpdateAutoRenewRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateAutoRenewRequest.to_json())

# convert the object into a dict
update_auto_renew_request_dict = update_auto_renew_request_instance.to_dict()
# create an instance of UpdateAutoRenewRequest from a dict
update_auto_renew_request_from_dict = UpdateAutoRenewRequest.from_dict(update_auto_renew_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


