# GeographicDivision

Describes a political geography.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**also_known_as** | **List[str]** | Any other valid OCD IDs that refer to the same division.\\n\\nBecause OCD IDs are meant to be human-readable and at least somewhat predictable, there are occasionally several identifiers for a single division. These identifiers are defined to be equivalent to one another, and one is always indicated as the primary identifier. The primary identifier will be returned in ocd_id above, and any other equivalent valid identifiers will be returned in this list.\\n\\nFor example, if this division&#39;s OCD ID is ocd-division/country:us/district:dc, this will contain ocd-division/country:us/state:dc. | [optional] 
**name** | **str** | The name of the division. | [optional] 
**office_indices** | **List[int]** | List of indices in the offices array, one for each office elected from this division. Will only be present if includeOffices was true (or absent) in the request. | [optional] 

## Example

```python
from openapi_client.models.geographic_division import GeographicDivision

# TODO update the JSON string below
json = "{}"
# create an instance of GeographicDivision from a JSON string
geographic_division_instance = GeographicDivision.from_json(json)
# print the JSON string representation of the object
print(GeographicDivision.to_json())

# convert the object into a dict
geographic_division_dict = geographic_division_instance.to_dict()
# create an instance of GeographicDivision from a dict
geographic_division_from_dict = GeographicDivision.from_dict(geographic_division_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


