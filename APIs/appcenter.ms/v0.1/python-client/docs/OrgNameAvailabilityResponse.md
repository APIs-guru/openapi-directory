# OrgNameAvailabilityResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **bool** | The availability status of the requested org name | 
**name** | **str** | The generated org name | 

## Example

```python
from openapi_client.models.org_name_availability_response import OrgNameAvailabilityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrgNameAvailabilityResponse from a JSON string
org_name_availability_response_instance = OrgNameAvailabilityResponse.from_json(json)
# print the JSON string representation of the object
print(OrgNameAvailabilityResponse.to_json())

# convert the object into a dict
org_name_availability_response_dict = org_name_availability_response_instance.to_dict()
# create an instance of OrgNameAvailabilityResponse from a dict
org_name_availability_response_from_dict = OrgNameAvailabilityResponse.from_dict(org_name_availability_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


