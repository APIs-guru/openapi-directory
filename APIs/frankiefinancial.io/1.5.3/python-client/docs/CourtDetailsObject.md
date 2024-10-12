# CourtDetailsObject

Officer court details as returned from an ASIC report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_number** | **str** |  | [optional] 
**application_year** | **int** |  | [optional] 
**country** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**type** | [**CodeDescription**](CodeDescription.md) |  | [optional] 

## Example

```python
from openapi_client.models.court_details_object import CourtDetailsObject

# TODO update the JSON string below
json = "{}"
# create an instance of CourtDetailsObject from a JSON string
court_details_object_instance = CourtDetailsObject.from_json(json)
# print the JSON string representation of the object
print(CourtDetailsObject.to_json())

# convert the object into a dict
court_details_object_dict = court_details_object_instance.to_dict()
# create an instance of CourtDetailsObject from a dict
court_details_object_from_dict = CourtDetailsObject.from_dict(court_details_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


