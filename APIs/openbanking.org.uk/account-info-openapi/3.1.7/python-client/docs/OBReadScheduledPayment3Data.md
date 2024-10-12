# OBReadScheduledPayment3Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduled_payment** | [**List[OBScheduledPayment3]**](OBScheduledPayment3.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_read_scheduled_payment3_data import OBReadScheduledPayment3Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadScheduledPayment3Data from a JSON string
ob_read_scheduled_payment3_data_instance = OBReadScheduledPayment3Data.from_json(json)
# print the JSON string representation of the object
print(OBReadScheduledPayment3Data.to_json())

# convert the object into a dict
ob_read_scheduled_payment3_data_dict = ob_read_scheduled_payment3_data_instance.to_dict()
# create an instance of OBReadScheduledPayment3Data from a dict
ob_read_scheduled_payment3_data_from_dict = OBReadScheduledPayment3Data.from_dict(ob_read_scheduled_payment3_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


