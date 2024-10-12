# DealersResponse

Dealers Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dealers** | [**List[Dealer]**](Dealer.md) |  | [optional] 
**num_found** | **int** | number of dealers found | [optional] 

## Example

```python
from openapi_client.models.dealers_response import DealersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DealersResponse from a JSON string
dealers_response_instance = DealersResponse.from_json(json)
# print the JSON string representation of the object
print(DealersResponse.to_json())

# convert the object into a dict
dealers_response_dict = dealers_response_instance.to_dict()
# create an instance of DealersResponse from a dict
dealers_response_from_dict = DealersResponse.from_dict(dealers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


