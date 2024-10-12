# UpdateCallRequestTransferNcco


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**RequestTransferActionParam**](RequestTransferActionParam.md) |  | 
**destination** | [**UpdateCallRequestTransferNccoDestination**](UpdateCallRequestTransferNccoDestination.md) |  | 

## Example

```python
from openapi_client.models.update_call_request_transfer_ncco import UpdateCallRequestTransferNcco

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCallRequestTransferNcco from a JSON string
update_call_request_transfer_ncco_instance = UpdateCallRequestTransferNcco.from_json(json)
# print the JSON string representation of the object
print(UpdateCallRequestTransferNcco.to_json())

# convert the object into a dict
update_call_request_transfer_ncco_dict = update_call_request_transfer_ncco_instance.to_dict()
# create an instance of UpdateCallRequestTransferNcco from a dict
update_call_request_transfer_ncco_from_dict = UpdateCallRequestTransferNcco.from_dict(update_call_request_transfer_ncco_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


