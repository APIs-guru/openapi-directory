# CreateOrganizationEarlyAccessFeaturesOptInRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit_scope_to_networks** | **List[str]** | A list of network IDs to apply the opt-in to | [optional] 
**short_name** | **str** | Short name of the early access feature | 

## Example

```python
from openapi_client.models.create_organization_early_access_features_opt_in_request import CreateOrganizationEarlyAccessFeaturesOptInRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationEarlyAccessFeaturesOptInRequest from a JSON string
create_organization_early_access_features_opt_in_request_instance = CreateOrganizationEarlyAccessFeaturesOptInRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationEarlyAccessFeaturesOptInRequest.to_json())

# convert the object into a dict
create_organization_early_access_features_opt_in_request_dict = create_organization_early_access_features_opt_in_request_instance.to_dict()
# create an instance of CreateOrganizationEarlyAccessFeaturesOptInRequest from a dict
create_organization_early_access_features_opt_in_request_from_dict = CreateOrganizationEarlyAccessFeaturesOptInRequest.from_dict(create_organization_early_access_features_opt_in_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


