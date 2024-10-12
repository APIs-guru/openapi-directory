# MasterProperties

The properties of Page that are only relevant for pages with page_type MASTER.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The human-readable name of the master. | [optional] 

## Example

```python
from openapi_client.models.master_properties import MasterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MasterProperties from a JSON string
master_properties_instance = MasterProperties.from_json(json)
# print the JSON string representation of the object
print(MasterProperties.to_json())

# convert the object into a dict
master_properties_dict = master_properties_instance.to_dict()
# create an instance of MasterProperties from a dict
master_properties_from_dict = MasterProperties.from_dict(master_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


