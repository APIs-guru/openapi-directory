# MetroAreaPartial

MetroArea

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the metro area. Likely the same as the IATA code.  | [optional] 
**facilities** | **List[str]** | List of facilities the metro area network. | [optional] 
**iata_code** | **str** | The three letter IATA airport code for identiying the metro area.  | [optional] 
**id** | **str** |  | [optional] 
**metro_area_networks** | **List[str]** | List of networks in the metro area. | [optional] 
**un_locode** | **str** | The UN/LOCODE for identifying the metro area.  | [optional] 

## Example

```python
from openapi_client.models.metro_area_partial import MetroAreaPartial

# TODO update the JSON string below
json = "{}"
# create an instance of MetroAreaPartial from a JSON string
metro_area_partial_instance = MetroAreaPartial.from_json(json)
# print the JSON string representation of the object
print(MetroAreaPartial.to_json())

# convert the object into a dict
metro_area_partial_dict = metro_area_partial_instance.to_dict()
# create an instance of MetroAreaPartial from a dict
metro_area_partial_from_dict = MetroAreaPartial.from_dict(metro_area_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


