# ServiceAreaBusiness

Service area businesses provide their service at the customer's location (for example, a locksmith or plumber).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_type** | **str** | Required. Indicates the type of the service area business. | [optional] 
**places** | [**Places**](Places.md) |  | [optional] 
**region_code** | **str** | Immutable. CLDR region code of the country/region that this service area business is based in. See http://cldr.unicode.org/ and http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: \&quot;CH\&quot; for Switzerland. This field is required for CUSTOMER_LOCATION_ONLY businesses, and is ignored otherwise. The region specified here can be different from regions for the areas that this business serves (e.g. service area businesses that provide services in regions other than the one that they are based in). If this location requires verification after creation, the address provided for verification purposes *must* be located within this region, and the business owner or their authorized representative *must* be able to receive postal mail at the provided verification address. | [optional] 

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


