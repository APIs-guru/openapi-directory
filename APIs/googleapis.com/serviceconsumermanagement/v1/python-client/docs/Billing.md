# Billing

Billing related configuration of the service. The following example shows how to configure monitored resources and metrics for billing, `consumer_destinations` is the only supported destination and the monitored resources need at least one label key `cloud.googleapis.com/location` to indicate the location of the billing usage, using different monitored resources between monitoring and billing is recommended so they can be evolved independently: monitored_resources: - type: library.googleapis.com/billing_branch labels: - key: cloud.googleapis.com/location description: | Predefined label to support billing location restriction. - key: city description: | Custom label to define the city where the library branch is located in. - key: name description: Custom label to define the name of the library branch. metrics: - name: library.googleapis.com/book/borrowed_count metric_kind: DELTA value_type: INT64 unit: \"1\" billing: consumer_destinations: - monitored_resource: library.googleapis.com/billing_branch metrics: - library.googleapis.com/book/borrowed_count

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_destinations** | [**List[BillingDestination]**](BillingDestination.md) | Billing configurations for sending metrics to the consumer project. There can be multiple consumer destinations per service, each one must have a different monitored resource type. A metric can be used in at most one consumer destination. | [optional] 

## Example

```python
from openapi_client.models.billing import Billing

# TODO update the JSON string below
json = "{}"
# create an instance of Billing from a JSON string
billing_instance = Billing.from_json(json)
# print the JSON string representation of the object
print(Billing.to_json())

# convert the object into a dict
billing_dict = billing_instance.to_dict()
# create an instance of Billing from a dict
billing_from_dict = Billing.from_dict(billing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


