# BatchUpdateDealsResponse

Response message for batch updating deals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deals** | [**List[Deal]**](Deal.md) | Deals updated. | [optional] 

## Example

```python
from openapi_client.models.batch_update_deals_response import BatchUpdateDealsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateDealsResponse from a JSON string
batch_update_deals_response_instance = BatchUpdateDealsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateDealsResponse.to_json())

# convert the object into a dict
batch_update_deals_response_dict = batch_update_deals_response_instance.to_dict()
# create an instance of BatchUpdateDealsResponse from a dict
batch_update_deals_response_from_dict = BatchUpdateDealsResponse.from_dict(batch_update_deals_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


