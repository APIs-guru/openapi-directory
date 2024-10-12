# Precinct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administration_region_id** | **str** | ID of the AdministrationRegion message for this precinct. Corresponds to LocalityId xml tag. | [optional] 
**contest_id** | **List[str]** | ID(s) of the Contest message(s) for this precinct. | [optional] 
**dataset_id** | **str** | Required. Dataset ID. What datasets our Precincts come from. | [optional] 
**early_vote_site_id** | **List[str]** | ID(s) of the PollingLocation message(s) for this precinct. | [optional] 
**electoral_district_id** | **List[str]** | ID(s) of the ElectoralDistrict message(s) for this precinct. | [optional] 
**id** | **str** | Required. A unique identifier for this precinct. | [optional] 
**mail_only** | **bool** | Specifies if the precinct runs mail-only elections. | [optional] 
**name** | **str** | Required. The name of the precinct. | [optional] 
**number** | **str** | The number of the precinct. | [optional] 
**ocd_id** | **List[str]** | Encouraged. The OCD ID of the precinct | [optional] 
**polling_location_id** | **List[str]** | ID(s) of the PollingLocation message(s) for this precinct. | [optional] 
**spatial_boundary_id** | **List[str]** | ID(s) of the SpatialBoundary message(s) for this precinct. Used to specify a geometrical boundary of the precinct. | [optional] 
**split_name** | **str** | If present, this proto corresponds to one portion of split precinct. Other portions of this precinct are guaranteed to have the same &#x60;name&#x60;. If not present, this proto represents a full precicnt. | [optional] 
**ward** | **str** | Specifies the ward the precinct is contained within. | [optional] 

## Example

```python
from openapi_client.models.precinct import Precinct

# TODO update the JSON string below
json = "{}"
# create an instance of Precinct from a JSON string
precinct_instance = Precinct.from_json(json)
# print the JSON string representation of the object
print(Precinct.to_json())

# convert the object into a dict
precinct_dict = precinct_instance.to_dict()
# create an instance of Precinct from a dict
precinct_from_dict = Precinct.from_dict(precinct_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


