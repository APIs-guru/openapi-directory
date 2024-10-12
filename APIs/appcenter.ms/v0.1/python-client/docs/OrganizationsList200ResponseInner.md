# OrganizationsList200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the organization | 
**name** | **str** | The slug name of the organization | 
**origin** | **str** | The creation origin of this organization | 

## Example

```python
from openapi_client.models.organizations_list200_response_inner import OrganizationsList200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationsList200ResponseInner from a JSON string
organizations_list200_response_inner_instance = OrganizationsList200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(OrganizationsList200ResponseInner.to_json())

# convert the object into a dict
organizations_list200_response_inner_dict = organizations_list200_response_inner_instance.to_dict()
# create an instance of OrganizationsList200ResponseInner from a dict
organizations_list200_response_inner_from_dict = OrganizationsList200ResponseInner.from_dict(organizations_list200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


