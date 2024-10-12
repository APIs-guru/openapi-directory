# OrgResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **str** | The date the org was created | [optional] 
**id** | **str** |  | [optional] 
**modified_date** | **str** | The date the org was modified | [optional] 
**name** | **str** | Org name | [optional] 
**plan** | [**Plan**](Plan.md) |  | [optional] 
**plan_cat** | **object** |  | [optional] 
**status** | **str** | Org name | [optional] 
**type** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.org_response import OrgResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrgResponse from a JSON string
org_response_instance = OrgResponse.from_json(json)
# print the JSON string representation of the object
print(OrgResponse.to_json())

# convert the object into a dict
org_response_dict = org_response_instance.to_dict()
# create an instance of OrgResponse from a dict
org_response_from_dict = OrgResponse.from_dict(org_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


