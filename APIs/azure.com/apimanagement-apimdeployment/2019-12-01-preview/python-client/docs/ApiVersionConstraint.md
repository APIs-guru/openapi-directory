# ApiVersionConstraint

Control Plane Apis version constraint for the API Management service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_api_version** | **str** | Limit control plane API calls to API Management service with version equal to or newer than this value. | [optional] 

## Example

```python
from openapi_client.models.api_version_constraint import ApiVersionConstraint

# TODO update the JSON string below
json = "{}"
# create an instance of ApiVersionConstraint from a JSON string
api_version_constraint_instance = ApiVersionConstraint.from_json(json)
# print the JSON string representation of the object
print(ApiVersionConstraint.to_json())

# convert the object into a dict
api_version_constraint_dict = api_version_constraint_instance.to_dict()
# create an instance of ApiVersionConstraint from a dict
api_version_constraint_from_dict = ApiVersionConstraint.from_dict(api_version_constraint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


