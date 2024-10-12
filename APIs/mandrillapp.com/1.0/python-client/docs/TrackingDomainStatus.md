# TrackingDomainStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cname** | [**SenderDomainInfoDkim**](SenderDomainInfoDkim.md) |  | [optional] 
**created_at** | **str** |  | [optional] 
**domain** | **str** |  | [optional] 
**last_tested_at** | **str** |  | [optional] 
**valid_tracking** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.tracking_domain_status import TrackingDomainStatus

# TODO update the JSON string below
json = "{}"
# create an instance of TrackingDomainStatus from a JSON string
tracking_domain_status_instance = TrackingDomainStatus.from_json(json)
# print the JSON string representation of the object
print(TrackingDomainStatus.to_json())

# convert the object into a dict
tracking_domain_status_dict = tracking_domain_status_instance.to_dict()
# create an instance of TrackingDomainStatus from a dict
tracking_domain_status_from_dict = TrackingDomainStatus.from_dict(tracking_domain_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


