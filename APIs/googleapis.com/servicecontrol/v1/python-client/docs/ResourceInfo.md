# ResourceInfo

Describes a resource associated with this operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permission** | **str** | The resource permission required for this request. | [optional] 
**resource_container** | **str** | The identifier of the parent of this resource instance. Must be in one of the following formats: - &#x60;projects/&#x60; - &#x60;folders/&#x60; - &#x60;organizations/&#x60; | [optional] 
**resource_location** | **str** | The location of the resource. If not empty, the resource will be checked against location policy. The value must be a valid zone, region or multiregion. For example: \&quot;europe-west4\&quot; or \&quot;northamerica-northeast1-a\&quot; | [optional] 
**resource_name** | **str** | Name of the resource. This is used for auditing purposes. | [optional] 

## Example

```python
from openapi_client.models.resource_info import ResourceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceInfo from a JSON string
resource_info_instance = ResourceInfo.from_json(json)
# print the JSON string representation of the object
print(ResourceInfo.to_json())

# convert the object into a dict
resource_info_dict = resource_info_instance.to_dict()
# create an instance of ResourceInfo from a dict
resource_info_from_dict = ResourceInfo.from_dict(resource_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


