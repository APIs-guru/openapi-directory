# VCenterCollection

Collection of vCenter details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The value of next link. | [optional] 
**value** | [**List[VCenter]**](VCenter.md) | The vCenter details. | [optional] 

## Example

```python
from openapi_client.models.v_center_collection import VCenterCollection

# TODO update the JSON string below
json = "{}"
# create an instance of VCenterCollection from a JSON string
v_center_collection_instance = VCenterCollection.from_json(json)
# print the JSON string representation of the object
print(VCenterCollection.to_json())

# convert the object into a dict
v_center_collection_dict = v_center_collection_instance.to_dict()
# create an instance of VCenterCollection from a dict
v_center_collection_from_dict = VCenterCollection.from_dict(v_center_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


