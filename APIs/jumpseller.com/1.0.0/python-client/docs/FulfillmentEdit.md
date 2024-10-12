# FulfillmentEdit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | [**FulfillmentEditFields**](FulfillmentEditFields.md) |  | [optional] 

## Example

```python
from openapi_client.models.fulfillment_edit import FulfillmentEdit

# TODO update the JSON string below
json = "{}"
# create an instance of FulfillmentEdit from a JSON string
fulfillment_edit_instance = FulfillmentEdit.from_json(json)
# print the JSON string representation of the object
print(FulfillmentEdit.to_json())

# convert the object into a dict
fulfillment_edit_dict = fulfillment_edit_instance.to_dict()
# create an instance of FulfillmentEdit from a dict
fulfillment_edit_from_dict = FulfillmentEdit.from_dict(fulfillment_edit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


