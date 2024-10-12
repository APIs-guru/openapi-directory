# ServiceCharge


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [optional] 
**amount** | **float** |  | [optional] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**name** | **str** | Service charge name | [optional] 
**percentage** | **float** | Service charge percentage. Use this field to calculate the amount of the service charge. Pass a percentage and amount at the same time. | [optional] 
**type** | **str** | The type of the service charge. | [optional] 

## Example

```python
from openapi_client.models.service_charge import ServiceCharge

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceCharge from a JSON string
service_charge_instance = ServiceCharge.from_json(json)
# print the JSON string representation of the object
print(ServiceCharge.to_json())

# convert the object into a dict
service_charge_dict = service_charge_instance.to_dict()
# create an instance of ServiceCharge from a dict
service_charge_from_dict = ServiceCharge.from_dict(service_charge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


