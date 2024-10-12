# CommonFeatureSpec

CommonFeatureSpec contains Hub-wide configuration information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anthosobservability** | [**AnthosObservabilityFeatureSpec**](AnthosObservabilityFeatureSpec.md) |  | [optional] 
**appdevexperience** | **object** | Spec for App Dev Experience Feature. | [optional] 
**cloudauditlogging** | [**CloudAuditLoggingFeatureSpec**](CloudAuditLoggingFeatureSpec.md) |  | [optional] 
**clusterupgrade** | [**ClusterUpgradeFleetSpec**](ClusterUpgradeFleetSpec.md) |  | [optional] 
**dataplanev2** | [**DataplaneV2FeatureSpec**](DataplaneV2FeatureSpec.md) |  | [optional] 
**fleetobservability** | [**FleetObservabilityFeatureSpec**](FleetObservabilityFeatureSpec.md) |  | [optional] 
**multiclusteringress** | [**MultiClusterIngressFeatureSpec**](MultiClusterIngressFeatureSpec.md) |  | [optional] 
**namespaceactuation** | [**NamespaceActuationFeatureSpec**](NamespaceActuationFeatureSpec.md) |  | [optional] 
**workloadcertificate** | [**FeatureSpec**](FeatureSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.common_feature_spec import CommonFeatureSpec

# TODO update the JSON string below
json = "{}"
# create an instance of CommonFeatureSpec from a JSON string
common_feature_spec_instance = CommonFeatureSpec.from_json(json)
# print the JSON string representation of the object
print(CommonFeatureSpec.to_json())

# convert the object into a dict
common_feature_spec_dict = common_feature_spec_instance.to_dict()
# create an instance of CommonFeatureSpec from a dict
common_feature_spec_from_dict = CommonFeatureSpec.from_dict(common_feature_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


