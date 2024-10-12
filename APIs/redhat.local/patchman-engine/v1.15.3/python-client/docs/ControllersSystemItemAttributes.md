# ControllersSystemItemAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **str** |  | [optional] 
**culled_timestamp** | **str** |  | [optional] 
**display_name** | **str** |  | [optional] 
**insights_id** | **str** |  | [optional] 
**last_evaluation** | **str** |  | [optional] 
**last_upload** | **str** |  | [optional] 
**os_major** | **str** |  | [optional] 
**os_minor** | **str** |  | [optional] 
**os_name** | **str** |  | [optional] 
**other_count** | **int** |  | [optional] 
**packages_installed** | **int** |  | [optional] 
**packages_updatable** | **int** |  | [optional] 
**rhba_count** | **int** |  | [optional] 
**rhea_count** | **int** |  | [optional] 
**rhsa_count** | **int** |  | [optional] 
**rhsm** | **str** |  | [optional] 
**stale** | **bool** |  | [optional] 
**stale_timestamp** | **str** |  | [optional] 
**stale_warning_timestamp** | **str** |  | [optional] 
**third_party** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.controllers_system_item_attributes import ControllersSystemItemAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersSystemItemAttributes from a JSON string
controllers_system_item_attributes_instance = ControllersSystemItemAttributes.from_json(json)
# print the JSON string representation of the object
print(ControllersSystemItemAttributes.to_json())

# convert the object into a dict
controllers_system_item_attributes_dict = controllers_system_item_attributes_instance.to_dict()
# create an instance of ControllersSystemItemAttributes from a dict
controllers_system_item_attributes_from_dict = ControllersSystemItemAttributes.from_dict(controllers_system_item_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


