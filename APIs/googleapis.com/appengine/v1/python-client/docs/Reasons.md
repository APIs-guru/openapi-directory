# Reasons

Containers transition between and within states based on reasons sent from various systems. CCFE will provide the CLH with reasons for the current state per system.The current systems that CCFE supports are: Service Management (Inception) Data Governance (Wipeout) Abuse (Ares) Billing (Internal Cloud Billing API) Service Activation (Service Controller)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abuse** | **str** |  | [optional] 
**billing** | **str** |  | [optional] 
**data_governance** | **str** |  | [optional] 
**service_activation** | **str** | Consumer Container denotes if the service is active within a project or not. This information could be used to clean up resources in case service in DISABLED_FULL i.e. Service is inactive &gt; 30 days. | [optional] 
**service_management** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.reasons import Reasons

# TODO update the JSON string below
json = "{}"
# create an instance of Reasons from a JSON string
reasons_instance = Reasons.from_json(json)
# print the JSON string representation of the object
print(Reasons.to_json())

# convert the object into a dict
reasons_dict = reasons_instance.to_dict()
# create an instance of Reasons from a dict
reasons_from_dict = Reasons.from_dict(reasons_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


