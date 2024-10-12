# ResourceAccessControl

The access controls set on the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcp_iam_policy** | **str** | The GCP IAM Policy to set on the resource. | [optional] 

## Example

```python
from openapi_client.models.resource_access_control import ResourceAccessControl

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceAccessControl from a JSON string
resource_access_control_instance = ResourceAccessControl.from_json(json)
# print the JSON string representation of the object
print(ResourceAccessControl.to_json())

# convert the object into a dict
resource_access_control_dict = resource_access_control_instance.to_dict()
# create an instance of ResourceAccessControl from a dict
resource_access_control_from_dict = ResourceAccessControl.from_dict(resource_access_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


