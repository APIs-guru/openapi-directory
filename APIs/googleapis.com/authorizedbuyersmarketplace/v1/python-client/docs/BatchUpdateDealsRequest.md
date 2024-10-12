# BatchUpdateDealsRequest

Request message for batch updating deals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[UpdateDealRequest]**](UpdateDealRequest.md) | Required. List of request messages to update deals. | [optional] 

## Example

```python
from openapi_client.models.batch_update_deals_request import BatchUpdateDealsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateDealsRequest from a JSON string
batch_update_deals_request_instance = BatchUpdateDealsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateDealsRequest.to_json())

# convert the object into a dict
batch_update_deals_request_dict = batch_update_deals_request_instance.to_dict()
# create an instance of BatchUpdateDealsRequest from a dict
batch_update_deals_request_from_dict = BatchUpdateDealsRequest.from_dict(batch_update_deals_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


