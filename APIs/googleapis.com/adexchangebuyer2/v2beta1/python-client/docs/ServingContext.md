# ServingContext

The serving context for this restriction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all** | **str** | Matches all contexts. | [optional] 
**app_type** | [**AppContext**](AppContext.md) |  | [optional] 
**auction_type** | [**AuctionContext**](AuctionContext.md) |  | [optional] 
**location** | [**LocationContext**](LocationContext.md) |  | [optional] 
**platform** | [**PlatformContext**](PlatformContext.md) |  | [optional] 
**security_type** | [**SecurityContext**](SecurityContext.md) |  | [optional] 

## Example

```python
from openapi_client.models.serving_context import ServingContext

# TODO update the JSON string below
json = "{}"
# create an instance of ServingContext from a JSON string
serving_context_instance = ServingContext.from_json(json)
# print the JSON string representation of the object
print(ServingContext.to_json())

# convert the object into a dict
serving_context_dict = serving_context_instance.to_dict()
# create an instance of ServingContext from a dict
serving_context_from_dict = ServingContext.from_dict(serving_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


