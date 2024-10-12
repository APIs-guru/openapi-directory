# DirectPeeringFacility

The properties that define a direct peering facility.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The address of the direct peering facility. | [optional] 
**peering_db_facility_id** | **int** | The PeeringDB.com ID of the facility. | [optional] 
**peering_db_facility_link** | **str** | The PeeringDB.com URL of the facility. | [optional] 

## Example

```python
from openapi_client.models.direct_peering_facility import DirectPeeringFacility

# TODO update the JSON string below
json = "{}"
# create an instance of DirectPeeringFacility from a JSON string
direct_peering_facility_instance = DirectPeeringFacility.from_json(json)
# print the JSON string representation of the object
print(DirectPeeringFacility.to_json())

# convert the object into a dict
direct_peering_facility_dict = direct_peering_facility_instance.to_dict()
# create an instance of DirectPeeringFacility from a dict
direct_peering_facility_from_dict = DirectPeeringFacility.from_dict(direct_peering_facility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


