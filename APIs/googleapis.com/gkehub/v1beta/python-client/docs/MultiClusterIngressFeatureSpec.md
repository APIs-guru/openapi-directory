# MultiClusterIngressFeatureSpec

**Multi-cluster Ingress**: The configuration for the MultiClusterIngress feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing** | **str** | Deprecated: This field will be ignored and should not be set. Customer&#39;s billing structure. | [optional] 
**config_membership** | **str** | Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: &#x60;projects/foo-proj/locations/global/memberships/bar&#x60; | [optional] 

## Example

```python
from openapi_client.models.multi_cluster_ingress_feature_spec import MultiClusterIngressFeatureSpec

# TODO update the JSON string below
json = "{}"
# create an instance of MultiClusterIngressFeatureSpec from a JSON string
multi_cluster_ingress_feature_spec_instance = MultiClusterIngressFeatureSpec.from_json(json)
# print the JSON string representation of the object
print(MultiClusterIngressFeatureSpec.to_json())

# convert the object into a dict
multi_cluster_ingress_feature_spec_dict = multi_cluster_ingress_feature_spec_instance.to_dict()
# create an instance of MultiClusterIngressFeatureSpec from a dict
multi_cluster_ingress_feature_spec_from_dict = MultiClusterIngressFeatureSpec.from_dict(multi_cluster_ingress_feature_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


