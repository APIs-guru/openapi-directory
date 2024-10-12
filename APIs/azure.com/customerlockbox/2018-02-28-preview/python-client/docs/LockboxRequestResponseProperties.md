# LockboxRequestResponseProperties

The properties that are associated with a lockbox request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date_time** | **datetime** | The creation time of the request. | [optional] [readonly] 
**duration** | **int** | The duration of the request in hours. | [optional] [readonly] 
**expiration_date_time** | **datetime** | The expiration time of the request. | [optional] [readonly] 
**justification** | **str** | The justification of the requestor. | [optional] [readonly] 
**request_id** | **str** | The Lockbox request ID. | [optional] [readonly] 
**requested_resource_ids** | **List[str]** | A list of resource IDs associated with the Lockbox request separated by &#39;,&#39;. | [optional] [readonly] 
**resource_type** | **str** | The resource type of the requested resources. | [optional] [readonly] 
**status** | [**LockboxRequestStatus**](LockboxRequestStatus.md) |  | [optional] 
**subscription_id** | **str** | The subscription ID. | [optional] [readonly] 
**support_case_url** | **str** | The url of the support case. | [optional] [readonly] 
**support_request** | **str** | The id of the support request associated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.lockbox_request_response_properties import LockboxRequestResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LockboxRequestResponseProperties from a JSON string
lockbox_request_response_properties_instance = LockboxRequestResponseProperties.from_json(json)
# print the JSON string representation of the object
print(LockboxRequestResponseProperties.to_json())

# convert the object into a dict
lockbox_request_response_properties_dict = lockbox_request_response_properties_instance.to_dict()
# create an instance of LockboxRequestResponseProperties from a dict
lockbox_request_response_properties_from_dict = LockboxRequestResponseProperties.from_dict(lockbox_request_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


