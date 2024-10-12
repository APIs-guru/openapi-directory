# CloneOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the new organization | 

## Example

```python
from openapi_client.models.clone_organization_request import CloneOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CloneOrganizationRequest from a JSON string
clone_organization_request_instance = CloneOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(CloneOrganizationRequest.to_json())

# convert the object into a dict
clone_organization_request_dict = clone_organization_request_instance.to_dict()
# create an instance of CloneOrganizationRequest from a dict
clone_organization_request_from_dict = CloneOrganizationRequest.from_dict(clone_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


