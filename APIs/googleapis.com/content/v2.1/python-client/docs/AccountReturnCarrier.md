# AccountReturnCarrier

 The return carrier information. This service is designed for merchants enrolled in the Buy on Google program. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_account_id** | **str** | Output only. Immutable. The Google-provided unique carrier ID, used to update the resource. | [optional] [readonly] 
**carrier_account_name** | **str** | Name of the carrier account. | [optional] 
**carrier_account_number** | **str** | Number of the carrier account. | [optional] 
**carrier_code** | **str** | The carrier code enum. Accepts the values FEDEX or UPS. | [optional] 

## Example

```python
from openapi_client.models.account_return_carrier import AccountReturnCarrier

# TODO update the JSON string below
json = "{}"
# create an instance of AccountReturnCarrier from a JSON string
account_return_carrier_instance = AccountReturnCarrier.from_json(json)
# print the JSON string representation of the object
print(AccountReturnCarrier.to_json())

# convert the object into a dict
account_return_carrier_dict = account_return_carrier_instance.to_dict()
# create an instance of AccountReturnCarrier from a dict
account_return_carrier_from_dict = AccountReturnCarrier.from_dict(account_return_carrier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


