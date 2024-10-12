# GetPublishingUser200Response

User credentials used for publishing activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GetPublishingUser200ResponseProperties**](GetPublishingUser200ResponseProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.get_publishing_user200_response import GetPublishingUser200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetPublishingUser200Response from a JSON string
get_publishing_user200_response_instance = GetPublishingUser200Response.from_json(json)
# print the JSON string representation of the object
print(GetPublishingUser200Response.to_json())

# convert the object into a dict
get_publishing_user200_response_dict = get_publishing_user200_response_instance.to_dict()
# create an instance of GetPublishingUser200Response from a dict
get_publishing_user200_response_from_dict = GetPublishingUser200Response.from_dict(get_publishing_user200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


