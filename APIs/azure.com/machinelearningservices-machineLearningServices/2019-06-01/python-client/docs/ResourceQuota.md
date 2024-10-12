# ResourceQuota

The quota assigned to a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Specifies the resource ID. | [optional] [readonly] 
**limit** | **int** | The maximum permitted quota of the resource. | [optional] [readonly] 
**name** | [**ResourceName**](ResourceName.md) |  | [optional] 
**type** | **str** | Specifies the resource type. | [optional] [readonly] 
**unit** | **str** | An enum describing the unit of quota measurement. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_quota import ResourceQuota

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceQuota from a JSON string
resource_quota_instance = ResourceQuota.from_json(json)
# print the JSON string representation of the object
print(ResourceQuota.to_json())

# convert the object into a dict
resource_quota_dict = resource_quota_instance.to_dict()
# create an instance of ResourceQuota from a dict
resource_quota_from_dict = ResourceQuota.from_dict(resource_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


