# DealerDBModelsEDTLiteRegistration

Registration for an EDT Lite

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dealer_code** | **str** | The dealer code with which the EDT Lite was created. | [optional] 
**expiration_date** | **datetime** | The date at which the content of the EDT Lite expires. | 
**instance_id** | **str** | The identifier for the EDT Lite. | 
**voucher_code** | **str** | The voucher code with which the EDT Lite was created. | 

## Example

```python
from openapi_client.models.dealer_db_models_edt_lite_registration import DealerDBModelsEDTLiteRegistration

# TODO update the JSON string below
json = "{}"
# create an instance of DealerDBModelsEDTLiteRegistration from a JSON string
dealer_db_models_edt_lite_registration_instance = DealerDBModelsEDTLiteRegistration.from_json(json)
# print the JSON string representation of the object
print(DealerDBModelsEDTLiteRegistration.to_json())

# convert the object into a dict
dealer_db_models_edt_lite_registration_dict = dealer_db_models_edt_lite_registration_instance.to_dict()
# create an instance of DealerDBModelsEDTLiteRegistration from a dict
dealer_db_models_edt_lite_registration_from_dict = DealerDBModelsEDTLiteRegistration.from_dict(dealer_db_models_edt_lite_registration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


