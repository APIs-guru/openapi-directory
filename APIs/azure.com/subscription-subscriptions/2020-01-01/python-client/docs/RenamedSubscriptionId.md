# RenamedSubscriptionId

The ID of the subscriptions that is being renamed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The ID of the subscriptions that is being renamed | [optional] [readonly] 

## Example

```python
from openapi_client.models.renamed_subscription_id import RenamedSubscriptionId

# TODO update the JSON string below
json = "{}"
# create an instance of RenamedSubscriptionId from a JSON string
renamed_subscription_id_instance = RenamedSubscriptionId.from_json(json)
# print the JSON string representation of the object
print(RenamedSubscriptionId.to_json())

# convert the object into a dict
renamed_subscription_id_dict = renamed_subscription_id_instance.to_dict()
# create an instance of RenamedSubscriptionId from a dict
renamed_subscription_id_from_dict = RenamedSubscriptionId.from_dict(renamed_subscription_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


