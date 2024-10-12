# ElectoralDistrict

Describes the geographic scope of a contest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | An identifier for this district, relative to its scope. For example, the 34th State Senate district would have id \&quot;34\&quot; and a scope of stateUpper. | [optional] 
**name** | **str** | The name of the district. | [optional] 
**scope** | **str** | The geographic scope of this district. If unspecified the district&#39;s geography is not known. One of: national, statewide, congressional, stateUpper, stateLower, countywide, judicial, schoolBoard, cityWide, township, countyCouncil, cityCouncil, ward, special | [optional] 

## Example

```python
from openapi_client.models.electoral_district import ElectoralDistrict

# TODO update the JSON string below
json = "{}"
# create an instance of ElectoralDistrict from a JSON string
electoral_district_instance = ElectoralDistrict.from_json(json)
# print the JSON string representation of the object
print(ElectoralDistrict.to_json())

# convert the object into a dict
electoral_district_dict = electoral_district_instance.to_dict()
# create an instance of ElectoralDistrict from a dict
electoral_district_from_dict = ElectoralDistrict.from_dict(electoral_district_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


