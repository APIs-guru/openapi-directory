# ObjectMeta

google.cloud.run.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. In Cloud Run, annotations with &#39;run.googleapis.com/&#39; and &#39;autoscaling.knative.dev&#39; are restricted, and the accepted annotations will be different depending on the resource type. * &#x60;autoscaling.knative.dev/maxScale&#x60;: Revision. * &#x60;autoscaling.knative.dev/minScale&#x60;: Revision. * &#x60;run.googleapis.com/binary-authorization-breakglass&#x60;: Service, Job, * &#x60;run.googleapis.com/binary-authorization&#x60;: Service, Job, Execution. * &#x60;run.googleapis.com/client-name&#x60;: All resources. * &#x60;run.googleapis.com/cloudsql-instances&#x60;: Revision, Execution. * &#x60;run.googleapis.com/container-dependencies&#x60;: Revision . * &#x60;run.googleapis.com/cpu-throttling&#x60;: Revision. * &#x60;run.googleapis.com/custom-audiences&#x60;: Service. * &#x60;run.googleapis.com/default-url-disabled&#x60;: Service. * &#x60;run.googleapis.com/description&#x60;: Service. * &#x60;run.googleapis.com/encryption-key-shutdown-hours&#x60;: Revision * &#x60;run.googleapis.com/encryption-key&#x60;: Revision, Execution. * &#x60;run.googleapis.com/execution-environment&#x60;: Revision, Execution. * &#x60;run.googleapis.com/gc-traffic-tags&#x60;: Service. * &#x60;run.googleapis.com/ingress&#x60;: Service. * &#x60;run.googleapis.com/launch-stage&#x60;: Service, Job. * &#x60;run.googleapis.com/minScale&#x60;: Service (ALPHA) * &#x60;run.googleapis.com/network-interfaces&#x60;: Revision, Execution. * &#x60;run.googleapis.com/post-key-revocation-action-type&#x60;: Revision. * &#x60;run.googleapis.com/secrets&#x60;: Revision, Execution. * &#x60;run.googleapis.com/secure-session-agent&#x60;: Revision. * &#x60;run.googleapis.com/sessionAffinity&#x60;: Revision. * &#x60;run.googleapis.com/startup-cpu-boost&#x60;: Revision. * &#x60;run.googleapis.com/vpc-access-connector&#x60;: Revision, Execution. * &#x60;run.googleapis.com/vpc-access-egress&#x60;: Revision, Execution. | [optional] 
**cluster_name** | **str** | Not supported by Cloud Run | [optional] 
**creation_timestamp** | **str** | UTC timestamp representing the server time when this object was created. | [optional] 
**deletion_grace_period_seconds** | **int** | Not supported by Cloud Run | [optional] 
**deletion_timestamp** | **str** | The read-only soft deletion timestamp for this resource. In Cloud Run, users are not able to set this field. Instead, they must call the corresponding Delete API. | [optional] 
**finalizers** | **List[str]** | Not supported by Cloud Run | [optional] 
**generate_name** | **str** | Not supported by Cloud Run | [optional] 
**generation** | **int** | A system-provided sequence number representing a specific generation of the desired state. | [optional] 
**labels** | **Dict[str, str]** | Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and routes. | [optional] 
**name** | **str** | Required. The name of the resource. Name is required when creating top-level resources (Service, Job), must be unique within a Cloud Run project/region, and cannot be changed once created. | [optional] 
**namespace** | **str** | Required. Defines the space within each name must be unique within a Cloud Run region. In Cloud Run, it must be project ID or number. | [optional] 
**owner_references** | [**List[OwnerReference]**](OwnerReference.md) | Not supported by Cloud Run | [optional] 
**resource_version** | **str** | Opaque, system-generated value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server or omit the value to disable conflict-detection. | [optional] 
**self_link** | **str** | URL representing this object. | [optional] 
**uid** | **str** | Unique, system-generated identifier for this resource. | [optional] 

## Example

```python
from openapi_client.models.object_meta import ObjectMeta

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectMeta from a JSON string
object_meta_instance = ObjectMeta.from_json(json)
# print the JSON string representation of the object
print(ObjectMeta.to_json())

# convert the object into a dict
object_meta_dict = object_meta_instance.to_dict()
# create an instance of ObjectMeta from a dict
object_meta_from_dict = ObjectMeta.from_dict(object_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


