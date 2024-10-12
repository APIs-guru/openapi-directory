# UpdateOrganizationEarlyAccessFeaturesOptInRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit_scope_to_networks** | **List[str]** | A list of network IDs to apply the opt-in to | [optional] 

## Example

```python
from openapi_client.models.update_organization_early_access_features_opt_in_request import UpdateOrganizationEarlyAccessFeaturesOptInRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationEarlyAccessFeaturesOptInRequest from a JSON string
update_organization_early_access_features_opt_in_request_instance = UpdateOrganizationEarlyAccessFeaturesOptInRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationEarlyAccessFeaturesOptInRequest.to_json())

# convert the object into a dict
update_organization_early_access_features_opt_in_request_dict = update_organization_early_access_features_opt_in_request_instance.to_dict()
# create an instance of UpdateOrganizationEarlyAccessFeaturesOptInRequest from a dict
update_organization_early_access_features_opt_in_request_from_dict = UpdateOrganizationEarlyAccessFeaturesOptInRequest.from_dict(update_organization_early_access_features_opt_in_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


