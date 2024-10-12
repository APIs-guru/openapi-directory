# ServiceAreaBusiness

Service area businesses provide their service at the customer's location (for example, a locksmith or plumber).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_type** | **str** | Indicates the type of the service area business. | [optional] 
**places** | [**Places**](Places.md) |  | [optional] 
**radius** | [**PointRadius**](PointRadius.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_area_business import ServiceAreaBusiness

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceAreaBusiness from a JSON string
service_area_business_instance = ServiceAreaBusiness.from_json(json)
# print the JSON string representation of the object
print(ServiceAreaBusiness.to_json())

# convert the object into a dict
service_area_business_dict = service_area_business_instance.to_dict()
# create an instance of ServiceAreaBusiness from a dict
service_area_business_from_dict = ServiceAreaBusiness.from_dict(service_area_business_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


