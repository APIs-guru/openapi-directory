# Fulfillment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | [**FulfillmentFields**](FulfillmentFields.md) |  | [optional] 

## Example

```python
from openapi_client.models.fulfillment import Fulfillment

# TODO update the JSON string below
json = "{}"
# create an instance of Fulfillment from a JSON string
fulfillment_instance = Fulfillment.from_json(json)
# print the JSON string representation of the object
print(Fulfillment.to_json())

# convert the object into a dict
fulfillment_dict = fulfillment_instance.to_dict()
# create an instance of Fulfillment from a dict
fulfillment_from_dict = Fulfillment.from_dict(fulfillment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


