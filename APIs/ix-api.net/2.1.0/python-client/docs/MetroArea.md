# MetroArea


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the metro area. Likely the same as the IATA code.  | 
**facilities** | **List[str]** | List of facilities the metro area network. | 
**iata_code** | **str** | The three letter IATA airport code for identiying the metro area.  | 
**id** | **str** |  | 
**metro_area_networks** | **List[str]** | List of networks in the metro area. | 
**un_locode** | **str** | The UN/LOCODE for identifying the metro area.  | 

## Example

```python
from openapi_client.models.metro_area import MetroArea

# TODO update the JSON string below
json = "{}"
# create an instance of MetroArea from a JSON string
metro_area_instance = MetroArea.from_json(json)
# print the JSON string representation of the object
print(MetroArea.to_json())

# convert the object into a dict
metro_area_dict = metro_area_instance.to_dict()
# create an instance of MetroArea from a dict
metro_area_from_dict = MetroArea.from_dict(metro_area_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


