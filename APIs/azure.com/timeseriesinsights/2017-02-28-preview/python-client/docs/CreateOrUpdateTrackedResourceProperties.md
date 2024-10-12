# CreateOrUpdateTrackedResourceProperties

Properties required to create any resource tracked by Azure Resource Manager.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the resource. | 
**tags** | **Dict[str, str]** | Key-value pairs of additional properties for the resource. | [optional] 

## Example

```python
from openapi_client.models.create_or_update_tracked_resource_properties import CreateOrUpdateTrackedResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrUpdateTrackedResourceProperties from a JSON string
create_or_update_tracked_resource_properties_instance = CreateOrUpdateTrackedResourceProperties.from_json(json)
# print the JSON string representation of the object
print(CreateOrUpdateTrackedResourceProperties.to_json())

# convert the object into a dict
create_or_update_tracked_resource_properties_dict = create_or_update_tracked_resource_properties_instance.to_dict()
# create an instance of CreateOrUpdateTrackedResourceProperties from a dict
create_or_update_tracked_resource_properties_from_dict = CreateOrUpdateTrackedResourceProperties.from_dict(create_or_update_tracked_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


