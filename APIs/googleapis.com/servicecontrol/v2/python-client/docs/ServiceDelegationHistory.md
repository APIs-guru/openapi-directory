# ServiceDelegationHistory

The history of delegation across multiple services as the result of the original user's action. Such as \"service A uses its own account to do something for user B\". This differs from ServiceAccountDelegationInfo, which only tracks the history of direct token exchanges (impersonation).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**original_principal** | **str** | The original end user who initiated the request to GCP. | [optional] 
**service_metadata** | [**List[ServiceMetadata]**](ServiceMetadata.md) | Data identifying the service specific jobs or units of work that were involved in a chain of service calls. | [optional] 

## Example

```python
from openapi_client.models.service_delegation_history import ServiceDelegationHistory

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceDelegationHistory from a JSON string
service_delegation_history_instance = ServiceDelegationHistory.from_json(json)
# print the JSON string representation of the object
print(ServiceDelegationHistory.to_json())

# convert the object into a dict
service_delegation_history_dict = service_delegation_history_instance.to_dict()
# create an instance of ServiceDelegationHistory from a dict
service_delegation_history_from_dict = ServiceDelegationHistory.from_dict(service_delegation_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


