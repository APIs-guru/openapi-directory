# ApplicationGatewaysUpdateTagsRequest

Tags object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.application_gateways_update_tags_request import ApplicationGatewaysUpdateTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewaysUpdateTagsRequest from a JSON string
application_gateways_update_tags_request_instance = ApplicationGatewaysUpdateTagsRequest.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewaysUpdateTagsRequest.to_json())

# convert the object into a dict
application_gateways_update_tags_request_dict = application_gateways_update_tags_request_instance.to_dict()
# create an instance of ApplicationGatewaysUpdateTagsRequest from a dict
application_gateways_update_tags_request_from_dict = ApplicationGatewaysUpdateTagsRequest.from_dict(application_gateways_update_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


