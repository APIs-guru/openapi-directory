# LocationIdSet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_ids** | **List[str]** | A non-empty list of location IDs. They must all be of the same location type (for example, state). | [optional] 

## Example

```python
from openapi_client.models.location_id_set import LocationIdSet

# TODO update the JSON string below
json = "{}"
# create an instance of LocationIdSet from a JSON string
location_id_set_instance = LocationIdSet.from_json(json)
# print the JSON string representation of the object
print(LocationIdSet.to_json())

# convert the object into a dict
location_id_set_dict = location_id_set_instance.to_dict()
# create an instance of LocationIdSet from a dict
location_id_set_from_dict = LocationIdSet.from_dict(location_id_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


