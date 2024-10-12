# OBReadScheduledPayment3



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OBReadDataScheduledPayment3**](OBReadDataScheduledPayment3.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_read_scheduled_payment3 import OBReadScheduledPayment3

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadScheduledPayment3 from a JSON string
ob_read_scheduled_payment3_instance = OBReadScheduledPayment3.from_json(json)
# print the JSON string representation of the object
print(OBReadScheduledPayment3.to_json())

# convert the object into a dict
ob_read_scheduled_payment3_dict = ob_read_scheduled_payment3_instance.to_dict()
# create an instance of OBReadScheduledPayment3 from a dict
ob_read_scheduled_payment3_from_dict = OBReadScheduledPayment3.from_dict(ob_read_scheduled_payment3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


