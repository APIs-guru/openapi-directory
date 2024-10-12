# UpdatePrice200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[UpdatePrice200ResponseErrorsInner]**](UpdatePrice200ResponseErrorsInner.md) |  | [optional] 
**mart** | **str** | Marketplace name. Example: Walmart-US | [optional] 
**message** | **str** | A message of acknowledgement for a price update | [optional] 
**sku** | **str** | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. | [optional] 
**status_code** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.update_price200_response import UpdatePrice200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePrice200Response from a JSON string
update_price200_response_instance = UpdatePrice200Response.from_json(json)
# print the JSON string representation of the object
print(UpdatePrice200Response.to_json())

# convert the object into a dict
update_price200_response_dict = update_price200_response_instance.to_dict()
# create an instance of UpdatePrice200Response from a dict
update_price200_response_from_dict = UpdatePrice200Response.from_dict(update_price200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


