# ReleaseFromOrganizationInventoryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serials** | **List[str]** | Serials of the devices that should be released | [optional] 

## Example

```python
from openapi_client.models.release_from_organization_inventory_request import ReleaseFromOrganizationInventoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseFromOrganizationInventoryRequest from a JSON string
release_from_organization_inventory_request_instance = ReleaseFromOrganizationInventoryRequest.from_json(json)
# print the JSON string representation of the object
print(ReleaseFromOrganizationInventoryRequest.to_json())

# convert the object into a dict
release_from_organization_inventory_request_dict = release_from_organization_inventory_request_instance.to_dict()
# create an instance of ReleaseFromOrganizationInventoryRequest from a dict
release_from_organization_inventory_request_from_dict = ReleaseFromOrganizationInventoryRequest.from_dict(release_from_organization_inventory_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


