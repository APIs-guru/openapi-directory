# RemoveTargetedSitesRequest

A request to stop targeting sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sites** | **List[str]** | A list of site URLs to stop targeting in the pretargeting configuration. These values will be removed from the list of targeted URLs in PretargetingConfig.webTargeting.values. | [optional] 

## Example

```python
from openapi_client.models.remove_targeted_sites_request import RemoveTargetedSitesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveTargetedSitesRequest from a JSON string
remove_targeted_sites_request_instance = RemoveTargetedSitesRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveTargetedSitesRequest.to_json())

# convert the object into a dict
remove_targeted_sites_request_dict = remove_targeted_sites_request_instance.to_dict()
# create an instance of RemoveTargetedSitesRequest from a dict
remove_targeted_sites_request_from_dict = RemoveTargetedSitesRequest.from_dict(remove_targeted_sites_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


