# IntelligencePack

Intelligence Pack containing a string name and boolean indicating if it's enabled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the intelligence pack. | [optional] 
**enabled** | **bool** | The enabled boolean for the intelligence pack. | [optional] 
**name** | **str** | The name of the intelligence pack. | [optional] 

## Example

```python
from openapi_client.models.intelligence_pack import IntelligencePack

# TODO update the JSON string below
json = "{}"
# create an instance of IntelligencePack from a JSON string
intelligence_pack_instance = IntelligencePack.from_json(json)
# print the JSON string representation of the object
print(IntelligencePack.to_json())

# convert the object into a dict
intelligence_pack_dict = intelligence_pack_instance.to_dict()
# create an instance of IntelligencePack from a dict
intelligence_pack_from_dict = IntelligencePack.from_dict(intelligence_pack_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


