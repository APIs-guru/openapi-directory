# OtherServiceAndFacilityInner

Enter any new code , name and description for any Other Facility

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The four letter Mnemonic used within an XML file to identify a code | [optional] 
**description** | **str** | Description to describe the purpose of the code | 
**name** | **str** | Long name associated with the code | 

## Example

```python
from openapi_client.models.other_service_and_facility_inner import OtherServiceAndFacilityInner

# TODO update the JSON string below
json = "{}"
# create an instance of OtherServiceAndFacilityInner from a JSON string
other_service_and_facility_inner_instance = OtherServiceAndFacilityInner.from_json(json)
# print the JSON string representation of the object
print(OtherServiceAndFacilityInner.to_json())

# convert the object into a dict
other_service_and_facility_inner_dict = other_service_and_facility_inner_instance.to_dict()
# create an instance of OtherServiceAndFacilityInner from a dict
other_service_and_facility_inner_from_dict = OtherServiceAndFacilityInner.from_dict(other_service_and_facility_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


