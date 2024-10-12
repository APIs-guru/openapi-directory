# PostOrganizationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.post_organization_request import PostOrganizationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostOrganizationRequest from a JSON string
post_organization_request_instance = PostOrganizationRequest.from_json(json)
# print the JSON string representation of the object
print(PostOrganizationRequest.to_json())

# convert the object into a dict
post_organization_request_dict = post_organization_request_instance.to_dict()
# create an instance of PostOrganizationRequest from a dict
post_organization_request_from_dict = PostOrganizationRequest.from_dict(post_organization_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


