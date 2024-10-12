# GKE

Represents a GKE destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster** | **str** | Required. The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created. | [optional] 
**location** | **str** | Required. The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters. | [optional] 
**namespace** | **str** | Required. The namespace the GKE service is running in. | [optional] 
**path** | **str** | Optional. The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: \&quot;/route\&quot;, \&quot;route\&quot;, \&quot;route/subroute\&quot;. | [optional] 
**service** | **str** | Required. Name of the GKE service. | [optional] 

## Example

```python
from openapi_client.models.gke import GKE

# TODO update the JSON string below
json = "{}"
# create an instance of GKE from a JSON string
gke_instance = GKE.from_json(json)
# print the JSON string representation of the object
print(GKE.to_json())

# convert the object into a dict
gke_dict = gke_instance.to_dict()
# create an instance of GKE from a dict
gke_from_dict = GKE.from_dict(gke_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


