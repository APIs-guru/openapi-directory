# ApplicationBillingDetailsDefinition

Managed application billing details definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_usage_id** | **str** | The managed application resource usage Id. | [optional] 

## Example

```python
from openapi_client.models.application_billing_details_definition import ApplicationBillingDetailsDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationBillingDetailsDefinition from a JSON string
application_billing_details_definition_instance = ApplicationBillingDetailsDefinition.from_json(json)
# print the JSON string representation of the object
print(ApplicationBillingDetailsDefinition.to_json())

# convert the object into a dict
application_billing_details_definition_dict = application_billing_details_definition_instance.to_dict()
# create an instance of ApplicationBillingDetailsDefinition from a dict
application_billing_details_definition_from_dict = ApplicationBillingDetailsDefinition.from_dict(application_billing_details_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


