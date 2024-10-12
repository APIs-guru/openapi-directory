# FailoverInstanceRequest

Request for Failover.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_protection_mode** | **str** | Optional. Available data protection modes that the user can choose. If it&#39;s unspecified, data protection mode will be LIMITED_DATA_LOSS by default. | [optional] 

## Example

```python
from openapi_client.models.failover_instance_request import FailoverInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverInstanceRequest from a JSON string
failover_instance_request_instance = FailoverInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(FailoverInstanceRequest.to_json())

# convert the object into a dict
failover_instance_request_dict = failover_instance_request_instance.to_dict()
# create an instance of FailoverInstanceRequest from a dict
failover_instance_request_from_dict = FailoverInstanceRequest.from_dict(failover_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


