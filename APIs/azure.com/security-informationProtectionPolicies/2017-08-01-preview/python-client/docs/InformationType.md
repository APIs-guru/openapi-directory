# InformationType

The information type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom** | **bool** | Indicates whether the information type is custom or not. | [optional] 
**display_name** | **str** | The name of the information type. | [optional] 
**enabled** | **bool** | Indicates whether the information type is enabled or not. | [optional] 
**keywords** | [**List[InformationProtectionKeyword]**](InformationProtectionKeyword.md) | The information type keywords. | [optional] 
**order** | **float** | The order of the information type. | [optional] 
**recommended_label_id** | **str** | The recommended label id to be associated with this information type. | [optional] 

## Example

```python
from openapi_client.models.information_type import InformationType

# TODO update the JSON string below
json = "{}"
# create an instance of InformationType from a JSON string
information_type_instance = InformationType.from_json(json)
# print the JSON string representation of the object
print(InformationType.to_json())

# convert the object into a dict
information_type_dict = information_type_instance.to_dict()
# create an instance of InformationType from a dict
information_type_from_dict = InformationType.from_dict(information_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


