# UpdateCallRequestTransferNccoDestination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ncco** | **List[object]** | Refer to the [NCCO Guide](https://developer.nexmo.com/voice/voice-api/ncco-reference) for a description of possible NCCO parameters. | 
**type** | **str** | Always &#x60;ncco&#x60; | 

## Example

```python
from openapi_client.models.update_call_request_transfer_ncco_destination import UpdateCallRequestTransferNccoDestination

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCallRequestTransferNccoDestination from a JSON string
update_call_request_transfer_ncco_destination_instance = UpdateCallRequestTransferNccoDestination.from_json(json)
# print the JSON string representation of the object
print(UpdateCallRequestTransferNccoDestination.to_json())

# convert the object into a dict
update_call_request_transfer_ncco_destination_dict = update_call_request_transfer_ncco_destination_instance.to_dict()
# create an instance of UpdateCallRequestTransferNccoDestination from a dict
update_call_request_transfer_ncco_destination_from_dict = UpdateCallRequestTransferNccoDestination.from_dict(update_call_request_transfer_ncco_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


