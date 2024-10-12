# PauseFinalizedDealRequest

Request message for pausing a finalized deal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | The reason to pause the finalized deal, will be displayed to the seller. Maximum length is 1000 characters. | [optional] 

## Example

```python
from openapi_client.models.pause_finalized_deal_request import PauseFinalizedDealRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PauseFinalizedDealRequest from a JSON string
pause_finalized_deal_request_instance = PauseFinalizedDealRequest.from_json(json)
# print the JSON string representation of the object
print(PauseFinalizedDealRequest.to_json())

# convert the object into a dict
pause_finalized_deal_request_dict = pause_finalized_deal_request_instance.to_dict()
# create an instance of PauseFinalizedDealRequest from a dict
pause_finalized_deal_request_from_dict = PauseFinalizedDealRequest.from_dict(pause_finalized_deal_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


