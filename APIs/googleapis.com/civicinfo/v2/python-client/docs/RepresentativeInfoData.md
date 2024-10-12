# RepresentativeInfoData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**divisions** | [**Dict[str, GeographicDivision]**](GeographicDivision.md) | A map of political geographic divisions that contain the requested address, keyed by the unique Open Civic Data identifier for this division. | [optional] 
**offices** | [**List[Office]**](Office.md) | Elected offices referenced by the divisions listed above. Will only be present if includeOffices was true in the request. | [optional] 
**officials** | [**List[Official]**](Official.md) | Officials holding the offices listed above. Will only be present if includeOffices was true in the request. | [optional] 

## Example

```python
from openapi_client.models.representative_info_data import RepresentativeInfoData

# TODO update the JSON string below
json = "{}"
# create an instance of RepresentativeInfoData from a JSON string
representative_info_data_instance = RepresentativeInfoData.from_json(json)
# print the JSON string representation of the object
print(RepresentativeInfoData.to_json())

# convert the object into a dict
representative_info_data_dict = representative_info_data_instance.to_dict()
# create an instance of RepresentativeInfoData from a dict
representative_info_data_from_dict = RepresentativeInfoData.from_dict(representative_info_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


