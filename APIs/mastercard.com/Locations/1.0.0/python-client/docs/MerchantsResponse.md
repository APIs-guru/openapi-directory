# MerchantsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchants** | [**Merchants**](Merchants.md) |  | [optional] 

## Example

```python
from openapi_client.models.merchants_response import MerchantsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantsResponse from a JSON string
merchants_response_instance = MerchantsResponse.from_json(json)
# print the JSON string representation of the object
print(MerchantsResponse.to_json())

# convert the object into a dict
merchants_response_dict = merchants_response_instance.to_dict()
# create an instance of MerchantsResponse from a dict
merchants_response_from_dict = MerchantsResponse.from_dict(merchants_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


