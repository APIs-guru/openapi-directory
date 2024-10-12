# AllocateQuotaRequest

Request message for the AllocateQuota method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocate_operation** | [**QuotaOperation**](QuotaOperation.md) |  | [optional] 
**service_config_id** | **str** | Specifies which version of service configuration should be used to process the request. If unspecified or no matching version can be found, the latest one will be used. | [optional] 

## Example

```python
from openapi_client.models.allocate_quota_request import AllocateQuotaRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AllocateQuotaRequest from a JSON string
allocate_quota_request_instance = AllocateQuotaRequest.from_json(json)
# print the JSON string representation of the object
print(AllocateQuotaRequest.to_json())

# convert the object into a dict
allocate_quota_request_dict = allocate_quota_request_instance.to_dict()
# create an instance of AllocateQuotaRequest from a dict
allocate_quota_request_from_dict = AllocateQuotaRequest.from_dict(allocate_quota_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


