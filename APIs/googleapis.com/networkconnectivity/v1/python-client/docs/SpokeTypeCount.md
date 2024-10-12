# SpokeTypeCount

The number of spokes of a given type that are associated with a specific hub. The type indicates what kind of resource is associated with the spoke.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Output only. The total number of spokes of this type that are associated with the hub. | [optional] [readonly] 
**spoke_type** | **str** | Output only. The type of the spokes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.spoke_type_count import SpokeTypeCount

# TODO update the JSON string below
json = "{}"
# create an instance of SpokeTypeCount from a JSON string
spoke_type_count_instance = SpokeTypeCount.from_json(json)
# print the JSON string representation of the object
print(SpokeTypeCount.to_json())

# convert the object into a dict
spoke_type_count_dict = spoke_type_count_instance.to_dict()
# create an instance of SpokeTypeCount from a dict
spoke_type_count_from_dict = SpokeTypeCount.from_dict(spoke_type_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


