# LocationContext

Output only. The Geo criteria the restriction applies to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**geo_criteria_ids** | **List[int]** | IDs representing the geo location for this context. Refer to the [geo-table.csv](https://storage.googleapis.com/adx-rtb-dictionaries/geo-table.csv) file for different geo criteria IDs. | [optional] 

## Example

```python
from openapi_client.models.location_context import LocationContext

# TODO update the JSON string below
json = "{}"
# create an instance of LocationContext from a JSON string
location_context_instance = LocationContext.from_json(json)
# print the JSON string representation of the object
print(LocationContext.to_json())

# convert the object into a dict
location_context_dict = location_context_instance.to_dict()
# create an instance of LocationContext from a dict
location_context_from_dict = LocationContext.from_dict(location_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


