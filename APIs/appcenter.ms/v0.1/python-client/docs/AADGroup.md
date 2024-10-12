# AADGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_group_id** | **str** | The id of the aad group | 
**display_name** | **str** | The display name of the aad group | 
**tenant_id** | **str** | The id of the aad tenant | 

## Example

```python
from openapi_client.models.aad_group import AADGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AADGroup from a JSON string
aad_group_instance = AADGroup.from_json(json)
# print the JSON string representation of the object
print(AADGroup.to_json())

# convert the object into a dict
aad_group_dict = aad_group_instance.to_dict()
# create an instance of AADGroup from a dict
aad_group_from_dict = AADGroup.from_dict(aad_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


