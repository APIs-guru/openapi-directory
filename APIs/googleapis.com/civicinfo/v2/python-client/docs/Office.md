# Office

Information about an Office held by one or more Officials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**division_id** | **str** | The OCD ID of the division with which this office is associated. | [optional] 
**levels** | **List[str]** | The levels of government of which this office is part. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example, the mayor of the District of Columbia acts at \&quot;locality\&quot; level, but also effectively at both \&quot;administrative-area-2\&quot; and \&quot;administrative-area-1\&quot;. | [optional] 
**name** | **str** | The human-readable name of the office. | [optional] 
**official_indices** | **List[int]** | List of indices in the officials array of people who presently hold this office. | [optional] 
**roles** | **List[str]** | The roles which this office fulfills. Roles are not meant to be exhaustive, or to exactly specify the entire set of responsibilities of a given office, but are meant to be rough categories that are useful for general selection from or sorting of a list of offices. | [optional] 
**sources** | [**List[Source]**](Source.md) | A list of sources for this office. If multiple sources are listed, the data has been aggregated from those sources. | [optional] 

## Example

```python
from openapi_client.models.office import Office

# TODO update the JSON string below
json = "{}"
# create an instance of Office from a JSON string
office_instance = Office.from_json(json)
# print the JSON string representation of the object
print(Office.to_json())

# convert the object into a dict
office_dict = office_instance.to_dict()
# create an instance of Office from a dict
office_from_dict = Office.from_dict(office_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


