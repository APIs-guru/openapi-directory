# ApiResourcePolicies

The API resource policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The API level only policies XML as embedded content. | [optional] 
**content_link** | **str** | The content link to the policies. | [optional] 

## Example

```python
from openapi_client.models.api_resource_policies import ApiResourcePolicies

# TODO update the JSON string below
json = "{}"
# create an instance of ApiResourcePolicies from a JSON string
api_resource_policies_instance = ApiResourcePolicies.from_json(json)
# print the JSON string representation of the object
print(ApiResourcePolicies.to_json())

# convert the object into a dict
api_resource_policies_dict = api_resource_policies_instance.to_dict()
# create an instance of ApiResourcePolicies from a dict
api_resource_policies_from_dict = ApiResourcePolicies.from_dict(api_resource_policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


