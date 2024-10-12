# QuotaChangeRequest

This property is required for providing the region and new quota limits

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payload** | **str** | Payload of the quota increase request. | [optional] 
**region** | **str** | Region for which the quota increase request is being made. | [optional] 

## Example

```python
from openapi_client.models.quota_change_request import QuotaChangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaChangeRequest from a JSON string
quota_change_request_instance = QuotaChangeRequest.from_json(json)
# print the JSON string representation of the object
print(QuotaChangeRequest.to_json())

# convert the object into a dict
quota_change_request_dict = quota_change_request_instance.to_dict()
# create an instance of QuotaChangeRequest from a dict
quota_change_request_from_dict = QuotaChangeRequest.from_dict(quota_change_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


