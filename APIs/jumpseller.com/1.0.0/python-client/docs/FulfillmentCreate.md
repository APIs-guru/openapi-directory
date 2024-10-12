# FulfillmentCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | [**FulfillmentCreateFields**](FulfillmentCreateFields.md) |  | [optional] 

## Example

```python
from openapi_client.models.fulfillment_create import FulfillmentCreate

# TODO update the JSON string below
json = "{}"
# create an instance of FulfillmentCreate from a JSON string
fulfillment_create_instance = FulfillmentCreate.from_json(json)
# print the JSON string representation of the object
print(FulfillmentCreate.to_json())

# convert the object into a dict
fulfillment_create_dict = fulfillment_create_instance.to_dict()
# create an instance of FulfillmentCreate from a dict
fulfillment_create_from_dict = FulfillmentCreate.from_dict(fulfillment_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


