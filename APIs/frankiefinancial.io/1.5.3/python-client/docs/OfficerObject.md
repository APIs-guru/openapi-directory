# OfficerObject

Officer details as returned from an ASIC report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appointment_date** | **date** |  | [optional] 
**court_details** | [**CourtDetailsObject**](CourtDetailsObject.md) |  | [optional] 
**doc_number** | **str** |  | [optional] 
**doc_number_qualifier** | **str** |  | [optional] 
**entity_id** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**type_description** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.officer_object import OfficerObject

# TODO update the JSON string below
json = "{}"
# create an instance of OfficerObject from a JSON string
officer_object_instance = OfficerObject.from_json(json)
# print the JSON string representation of the object
print(OfficerObject.to_json())

# convert the object into a dict
officer_object_dict = officer_object_instance.to_dict()
# create an instance of OfficerObject from a dict
officer_object_from_dict = OfficerObject.from_dict(officer_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


