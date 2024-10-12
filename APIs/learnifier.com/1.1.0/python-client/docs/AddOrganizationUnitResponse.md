# AddOrganizationUnitResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ou_id** | **float** | The Organization Unit id | [optional] 

## Example

```python
from openapi_client.models.add_organization_unit_response import AddOrganizationUnitResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddOrganizationUnitResponse from a JSON string
add_organization_unit_response_instance = AddOrganizationUnitResponse.from_json(json)
# print the JSON string representation of the object
print(AddOrganizationUnitResponse.to_json())

# convert the object into a dict
add_organization_unit_response_dict = add_organization_unit_response_instance.to_dict()
# create an instance of AddOrganizationUnitResponse from a dict
add_organization_unit_response_from_dict = AddOrganizationUnitResponse.from_dict(add_organization_unit_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


