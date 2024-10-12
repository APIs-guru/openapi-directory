# FacilityPartial

Facility

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_country** | **str** | ISO 3166-1 alpha-2 country code, for example DE  | [optional] 
**address_locality** | **str** | The locality/city. For example, Mountain View. | [optional] 
**address_region** | **str** | The region. For example, CA | [optional] 
**id** | **str** |  | [optional] 
**metro_area** | **str** | Id of the &#x60;MetroArea&#x60; the DC is located in.  | [optional] 
**name** | **str** | Name of the Datacenter as called by the operator  | [optional] 
**organisation_name** | **str** | Name of Datacenter operator  | [optional] 
**peeringdb_facility_id** | **int** | [PeeringDB](https://www.peeringdb.com) facitlity ID, can be extracted from the url https://www.peeringdb.com/fac/$id  | [optional] 
**pops** | **List[str]** | List of pops in the &#x60;Facility&#x60;. | [optional] 
**postal_code** | **str** | A postal code. For example, 9404 | [optional] 
**street_address** | **str** | The street address. For example, 1600 Amphitheatre Pkwy. | [optional] 

## Example

```python
from openapi_client.models.facility_partial import FacilityPartial

# TODO update the JSON string below
json = "{}"
# create an instance of FacilityPartial from a JSON string
facility_partial_instance = FacilityPartial.from_json(json)
# print the JSON string representation of the object
print(FacilityPartial.to_json())

# convert the object into a dict
facility_partial_dict = facility_partial_instance.to_dict()
# create an instance of FacilityPartial from a dict
facility_partial_from_dict = FacilityPartial.from_dict(facility_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


