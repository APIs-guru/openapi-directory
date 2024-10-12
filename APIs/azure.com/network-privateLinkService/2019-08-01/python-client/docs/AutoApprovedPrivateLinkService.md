# AutoApprovedPrivateLinkService

The information of an AutoApprovedPrivateLinkService.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**private_link_service** | **str** | The id of the private link service resource. | [optional] 

## Example

```python
from openapi_client.models.auto_approved_private_link_service import AutoApprovedPrivateLinkService

# TODO update the JSON string below
json = "{}"
# create an instance of AutoApprovedPrivateLinkService from a JSON string
auto_approved_private_link_service_instance = AutoApprovedPrivateLinkService.from_json(json)
# print the JSON string representation of the object
print(AutoApprovedPrivateLinkService.to_json())

# convert the object into a dict
auto_approved_private_link_service_dict = auto_approved_private_link_service_instance.to_dict()
# create an instance of AutoApprovedPrivateLinkService from a dict
auto_approved_private_link_service_from_dict = AutoApprovedPrivateLinkService.from_dict(auto_approved_private_link_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


