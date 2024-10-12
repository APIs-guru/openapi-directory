# AddTargetedSitesRequest

A request to start targeting the provided sites in a specific pretargeting configuration. The pretargeting configuration itself specifies how these sites are targeted in PretargetingConfig.webTargeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sites** | **List[str]** | A list of site URLs to target in the pretargeting configuration. These values will be added to the list of targeted URLs in PretargetingConfig.webTargeting.values. | [optional] 
**targeting_mode** | **str** | Required. The targeting mode that should be applied to the list of site URLs. If there are existing targeted sites, must be equal to the existing PretargetingConfig.webTargeting.targetingMode or a 400 bad request error will be returned. | [optional] 

## Example

```python
from openapi_client.models.add_targeted_sites_request import AddTargetedSitesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddTargetedSitesRequest from a JSON string
add_targeted_sites_request_instance = AddTargetedSitesRequest.from_json(json)
# print the JSON string representation of the object
print(AddTargetedSitesRequest.to_json())

# convert the object into a dict
add_targeted_sites_request_dict = add_targeted_sites_request_instance.to_dict()
# create an instance of AddTargetedSitesRequest from a dict
add_targeted_sites_request_from_dict = AddTargetedSitesRequest.from_dict(add_targeted_sites_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


