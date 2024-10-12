# Consumable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | 

## Example

```python
from openapi_client.models.consumable import Consumable

# TODO update the JSON string below
json = "{}"
# create an instance of Consumable from a JSON string
consumable_instance = Consumable.from_json(json)
# print the JSON string representation of the object
print(Consumable.to_json())

# convert the object into a dict
consumable_dict = consumable_instance.to_dict()
# create an instance of Consumable from a dict
consumable_from_dict = Consumable.from_dict(consumable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


