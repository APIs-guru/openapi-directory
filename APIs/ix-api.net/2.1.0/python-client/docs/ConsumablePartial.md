# ConsumablePartial

Consumable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | [optional] 

## Example

```python
from openapi_client.models.consumable_partial import ConsumablePartial

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumablePartial from a JSON string
consumable_partial_instance = ConsumablePartial.from_json(json)
# print the JSON string representation of the object
print(ConsumablePartial.to_json())

# convert the object into a dict
consumable_partial_dict = consumable_partial_instance.to_dict()
# create an instance of ConsumablePartial from a dict
consumable_partial_from_dict = ConsumablePartial.from_dict(consumable_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


