# AllRequestTypesExample


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication** | [**AuthenticationMessage**](AuthenticationMessage.md) |  | [optional] 
**heartbeat** | [**HeartbeatMessage**](HeartbeatMessage.md) |  | [optional] 
**market_subscription** | [**MarketSubscriptionMessage**](MarketSubscriptionMessage.md) |  | [optional] 
**op_types** | **str** |  | [optional] 
**order_subscription_message** | [**OrderSubscriptionMessage**](OrderSubscriptionMessage.md) |  | [optional] 

## Example

```python
from openapi_client.models.all_request_types_example import AllRequestTypesExample

# TODO update the JSON string below
json = "{}"
# create an instance of AllRequestTypesExample from a JSON string
all_request_types_example_instance = AllRequestTypesExample.from_json(json)
# print the JSON string representation of the object
print(AllRequestTypesExample.to_json())

# convert the object into a dict
all_request_types_example_dict = all_request_types_example_instance.to_dict()
# create an instance of AllRequestTypesExample from a dict
all_request_types_example_from_dict = AllRequestTypesExample.from_dict(all_request_types_example_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


