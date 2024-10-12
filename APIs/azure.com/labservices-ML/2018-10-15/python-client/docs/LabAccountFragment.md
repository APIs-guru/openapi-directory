# LabAccountFragment

Represents a lab account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LabAccountPropertiesFragment**](LabAccountPropertiesFragment.md) |  | [optional] 
**id** | **str** | The identifier of the resource. | [optional] [readonly] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.lab_account_fragment import LabAccountFragment

# TODO update the JSON string below
json = "{}"
# create an instance of LabAccountFragment from a JSON string
lab_account_fragment_instance = LabAccountFragment.from_json(json)
# print the JSON string representation of the object
print(LabAccountFragment.to_json())

# convert the object into a dict
lab_account_fragment_dict = lab_account_fragment_instance.to_dict()
# create an instance of LabAccountFragment from a dict
lab_account_fragment_from_dict = LabAccountFragment.from_dict(lab_account_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


