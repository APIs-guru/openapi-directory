# PersonOrganizationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**department** | **str** | The department within the organization. Deprecated. | [optional] 
**description** | **str** | A short description of the person&#39;s role in this organization. Deprecated. | [optional] 
**end_date** | **str** | The date that the person left this organization. | [optional] 
**location** | **str** | The location of this organization. Deprecated. | [optional] 
**name** | **str** | The name of the organization. | [optional] 
**primary** | **bool** | If \&quot;true\&quot;, indicates this organization is the person&#39;s primary one, which is typically interpreted as the current one. | [optional] 
**start_date** | **str** | The date that the person joined this organization. | [optional] 
**title** | **str** | The person&#39;s job title or role within the organization. | [optional] 
**type** | **str** | The type of organization. Possible values include, but are not limited to, the following values:   - \&quot;work\&quot; - Work.  - \&quot;school\&quot; - School. | [optional] 

## Example

```python
from openapi_client.models.person_organizations_inner import PersonOrganizationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PersonOrganizationsInner from a JSON string
person_organizations_inner_instance = PersonOrganizationsInner.from_json(json)
# print the JSON string representation of the object
print(PersonOrganizationsInner.to_json())

# convert the object into a dict
person_organizations_inner_dict = person_organizations_inner_instance.to_dict()
# create an instance of PersonOrganizationsInner from a dict
person_organizations_inner_from_dict = PersonOrganizationsInner.from_dict(person_organizations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


