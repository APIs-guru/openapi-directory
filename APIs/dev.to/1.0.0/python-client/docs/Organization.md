# Organization

Representation of an Organization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**github_username** | **str** |  | [optional] 
**joined_at** | **str** |  | [optional] 
**location** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**story** | **str** |  | [optional] 
**summary** | **str** |  | [optional] 
**tag_line** | **str** |  | [optional] 
**tech_stack** | **str** |  | [optional] 
**twitter_username** | **str** |  | [optional] 
**type_of** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.organization import Organization

# TODO update the JSON string below
json = "{}"
# create an instance of Organization from a JSON string
organization_instance = Organization.from_json(json)
# print the JSON string representation of the object
print(Organization.to_json())

# convert the object into a dict
organization_dict = organization_instance.to_dict()
# create an instance of Organization from a dict
organization_from_dict = Organization.from_dict(organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


