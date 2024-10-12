# SharedOrganization

The organization the resource belongs to

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**profile_image** | **str** | Profile image (640x640) | [optional] 
**profile_image_90** | **str** | Profile image (90x90) | [optional] 
**slug** | **str** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.shared_organization import SharedOrganization

# TODO update the JSON string below
json = "{}"
# create an instance of SharedOrganization from a JSON string
shared_organization_instance = SharedOrganization.from_json(json)
# print the JSON string representation of the object
print(SharedOrganization.to_json())

# convert the object into a dict
shared_organization_dict = shared_organization_instance.to_dict()
# create an instance of SharedOrganization from a dict
shared_organization_from_dict = SharedOrganization.from_dict(shared_organization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


