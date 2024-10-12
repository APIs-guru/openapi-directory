# RestoreDomainRequest

RestoreDomainRequest is the request received by RestoreDomain rpc

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_id** | **str** | Required. ID of the backup to be restored | [optional] 

## Example

```python
from openapi_client.models.restore_domain_request import RestoreDomainRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreDomainRequest from a JSON string
restore_domain_request_instance = RestoreDomainRequest.from_json(json)
# print the JSON string representation of the object
print(RestoreDomainRequest.to_json())

# convert the object into a dict
restore_domain_request_dict = restore_domain_request_instance.to_dict()
# create an instance of RestoreDomainRequest from a dict
restore_domain_request_from_dict = RestoreDomainRequest.from_dict(restore_domain_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


