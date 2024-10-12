# Facility


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_country** | **str** | ISO 3166-1 alpha-2 country code, for example DE  | 
**address_locality** | **str** | The locality/city. For example, Mountain View. | 
**address_region** | **str** | The region. For example, CA | 
**id** | **str** |  | 
**metro_area** | **str** | Id of the &#x60;MetroArea&#x60; the DC is located in.  | 
**name** | **str** | Name of the Datacenter as called by the operator  | 
**organisation_name** | **str** | Name of Datacenter operator  | 
**peeringdb_facility_id** | **int** | [PeeringDB](https://www.peeringdb.com) facitlity ID, can be extracted from the url https://www.peeringdb.com/fac/$id  | [optional] 
**pops** | **List[str]** | List of pops in the &#x60;Facility&#x60;. | 
**postal_code** | **str** | A postal code. For example, 9404 | 
**street_address** | **str** | The street address. For example, 1600 Amphitheatre Pkwy. | 

## Example

```python
from openapi_client.models.facility import Facility

# TODO update the JSON string below
json = "{}"
# create an instance of Facility from a JSON string
facility_instance = Facility.from_json(json)
# print the JSON string representation of the object
print(Facility.to_json())

# convert the object into a dict
facility_dict = facility_instance.to_dict()
# create an instance of Facility from a dict
facility_from_dict = Facility.from_dict(facility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


