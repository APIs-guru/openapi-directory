# CreateShortDynamicLinkResponse

Response to create a short Dynamic Link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preview_link** | **str** | Preview link to show the link flow chart. (debug info.) | [optional] 
**short_link** | **str** | Short Dynamic Link value. e.g. https://abcd.app.goo.gl/wxyz | [optional] 
**warning** | [**List[DynamicLinkWarning]**](DynamicLinkWarning.md) | Information about potential warnings on link creation. | [optional] 

## Example

```python
from openapi_client.models.create_short_dynamic_link_response import CreateShortDynamicLinkResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateShortDynamicLinkResponse from a JSON string
create_short_dynamic_link_response_instance = CreateShortDynamicLinkResponse.from_json(json)
# print the JSON string representation of the object
print(CreateShortDynamicLinkResponse.to_json())

# convert the object into a dict
create_short_dynamic_link_response_dict = create_short_dynamic_link_response_instance.to_dict()
# create an instance of CreateShortDynamicLinkResponse from a dict
create_short_dynamic_link_response_from_dict = CreateShortDynamicLinkResponse.from_dict(create_short_dynamic_link_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


