# Info


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**city** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**email** | **str** |  | [optional] 
**owner** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**state_code** | **str** |  | [optional] 
**street_address** | **str** |  | [optional] 
**street_address_line_2** | **str** |  | [optional] 
**zip_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.info import Info

# TODO update the JSON string below
json = "{}"
# create an instance of Info from a JSON string
info_instance = Info.from_json(json)
# print the JSON string representation of the object
print(Info.to_json())

# convert the object into a dict
info_dict = info_instance.to_dict()
# create an instance of Info from a dict
info_from_dict = Info.from_dict(info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


