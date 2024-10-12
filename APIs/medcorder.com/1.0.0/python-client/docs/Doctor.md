# Doctor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**address2** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**county** | **str** |  | [optional] 
**distance** | **float** |  | [optional] 
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**full_name** | **str** |  | [optional] 
**gender** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**latitude** | **float** |  | [optional] 
**longitude** | **float** |  | [optional] 
**specialty** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**website** | **str** |  | [optional] 
**zip** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.doctor import Doctor

# TODO update the JSON string below
json = "{}"
# create an instance of Doctor from a JSON string
doctor_instance = Doctor.from_json(json)
# print the JSON string representation of the object
print(Doctor.to_json())

# convert the object into a dict
doctor_dict = doctor_instance.to_dict()
# create an instance of Doctor from a dict
doctor_from_dict = Doctor.from_dict(doctor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


