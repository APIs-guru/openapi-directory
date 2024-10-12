# ResourceInfo

Describes a resource referenced in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container** | **str** | Optional. The identifier of the container of this resource. For Google Cloud APIs, the resource container must be one of the following formats: - &#x60;projects/&#x60; - &#x60;folders/&#x60; - &#x60;organizations/&#x60; Required for the policy enforcement on the container level (e.g. VPCSC, Location Policy check, Org Policy check). | [optional] 
**location** | **str** | Optional. The location of the resource, it must be a valid zone, region or multiregion, for example: \&quot;europe-west4\&quot;, \&quot;northamerica-northeast1-a\&quot;. Required for location policy check. | [optional] 
**name** | **str** | The name of the resource referenced in the request. | [optional] 
**permission** | **str** | The resource permission needed for this request. The format must be \&quot;{service}/{plural}.{verb}\&quot;. | [optional] 
**type** | **str** | The resource type in the format of \&quot;{service}/{kind}\&quot;. | [optional] 

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


