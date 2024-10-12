# GoogleCloudRunV2Service

Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Optional. Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects. Cloud Run API v2 does not support annotations with &#x60;run.googleapis.com&#x60;, &#x60;cloud.googleapis.com&#x60;, &#x60;serving.knative.dev&#x60;, or &#x60;autoscaling.knative.dev&#x60; namespaces, and they will be rejected in new resources. All system annotations in v1 now have a corresponding field in v2 Service. This field follows Kubernetes annotations&#39; namespacing, limits, and rules. | [optional] 
**binary_authorization** | [**GoogleCloudRunV2BinaryAuthorization**](GoogleCloudRunV2BinaryAuthorization.md) |  | [optional] 
**client** | **str** | Arbitrary identifier for the API client. | [optional] 
**client_version** | **str** | Arbitrary version identifier for the API client. | [optional] 
**conditions** | [**List[GoogleCloudRunV2Condition]**](GoogleCloudRunV2Condition.md) | Output only. The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Service does not reach its Serving state. See comments in &#x60;reconciling&#x60; for additional information on reconciliation process in Cloud Run. | [optional] [readonly] 
**create_time** | **str** | Output only. The creation time. | [optional] [readonly] 
**creator** | **str** | Output only. Email address of the authenticated creator. | [optional] [readonly] 
**custom_audiences** | **List[str]** | One or more custom audiences that you want this service to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests. For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences. | [optional] 
**default_uri_disabled** | **bool** | Optional. Disables public resolution of the default URI of this service. | [optional] 
**delete_time** | **str** | Output only. The deletion time. | [optional] [readonly] 
**description** | **str** | User-provided description of the Service. This field currently has a 512-character limit. | [optional] 
**etag** | **str** | Output only. A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates. | [optional] [readonly] 
**expire_time** | **str** | Output only. For a deleted resource, the time after which it will be permamently deleted. | [optional] [readonly] 
**generation** | **str** | Output only. A number that monotonically increases every time the user modifies the desired state. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a &#x60;string&#x60; instead of an &#x60;integer&#x60;. | [optional] [readonly] 
**ingress** | **str** | Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. | [optional] 
**labels** | **Dict[str, str]** | Optional. Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google&#39;s billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels. Cloud Run API v2 does not support labels with &#x60;run.googleapis.com&#x60;, &#x60;cloud.googleapis.com&#x60;, &#x60;serving.knative.dev&#x60;, or &#x60;autoscaling.knative.dev&#x60; namespaces, and they will be rejected. All system labels in v1 now have a corresponding field in v2 Service. | [optional] 
**last_modifier** | **str** | Output only. Email address of the last authenticated modifier. | [optional] [readonly] 
**latest_created_revision** | **str** | Output only. Name of the last created revision. See comments in &#x60;reconciling&#x60; for additional information on reconciliation process in Cloud Run. | [optional] [readonly] 
**latest_ready_revision** | **str** | Output only. Name of the latest revision that is serving traffic. See comments in &#x60;reconciling&#x60; for additional information on reconciliation process in Cloud Run. | [optional] [readonly] 
**launch_stage** | **str** | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/terms/launch-stages). Cloud Run supports &#x60;ALPHA&#x60;, &#x60;BETA&#x60;, and &#x60;GA&#x60;. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. | [optional] 
**name** | **str** | The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service_id. Format: projects/{project}/locations/{location}/services/{service_id} | [optional] 
**observed_generation** | **str** | Output only. The generation of this Service currently serving traffic. See comments in &#x60;reconciling&#x60; for additional information on reconciliation process in Cloud Run. Please note that unlike v1, this is an int64 value. As with most Google APIs, its JSON representation will be a &#x60;string&#x60; instead of an &#x60;integer&#x60;. | [optional] [readonly] 
**reconciling** | **bool** | Output only. Returns true if the Service is currently being acted upon by the system to bring it into the desired state. When a new Service is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Service to the desired serving state. This process is called reconciliation. While reconciliation is in process, &#x60;observed_generation&#x60;, &#x60;latest_ready_revison&#x60;, &#x60;traffic_statuses&#x60;, and &#x60;uri&#x60; will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the serving state matches the Service, or there was an error, and reconciliation failed. This state can be found in &#x60;terminal_condition.state&#x60;. If reconciliation succeeded, the following fields will match: &#x60;traffic&#x60; and &#x60;traffic_statuses&#x60;, &#x60;observed_generation&#x60; and &#x60;generation&#x60;, &#x60;latest_ready_revision&#x60; and &#x60;latest_created_revision&#x60;. If reconciliation failed, &#x60;traffic_statuses&#x60;, &#x60;observed_generation&#x60;, and &#x60;latest_ready_revision&#x60; will have the state of the last serving revision, or empty for newly created Services. Additional information on the failure can be found in &#x60;terminal_condition&#x60; and &#x60;conditions&#x60;. | [optional] [readonly] 
**satisfies_pzs** | **bool** | Output only. Reserved for future use. | [optional] [readonly] 
**scaling** | [**GoogleCloudRunV2ServiceScaling**](GoogleCloudRunV2ServiceScaling.md) |  | [optional] 
**template** | [**GoogleCloudRunV2RevisionTemplate**](GoogleCloudRunV2RevisionTemplate.md) |  | [optional] 
**terminal_condition** | [**GoogleCloudRunV2Condition**](GoogleCloudRunV2Condition.md) |  | [optional] 
**traffic** | [**List[GoogleCloudRunV2TrafficTarget]**](GoogleCloudRunV2TrafficTarget.md) | Specifies how to distribute traffic over a collection of Revisions belonging to the Service. If traffic is empty or not provided, defaults to 100% traffic to the latest &#x60;Ready&#x60; Revision. | [optional] 
**traffic_statuses** | [**List[GoogleCloudRunV2TrafficTargetStatus]**](GoogleCloudRunV2TrafficTargetStatus.md) | Output only. Detailed status information for corresponding traffic targets. See comments in &#x60;reconciling&#x60; for additional information on reconciliation process in Cloud Run. | [optional] [readonly] 
**uid** | **str** | Output only. Server assigned unique identifier for the trigger. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted. | [optional] [readonly] 
**update_time** | **str** | Output only. The last-modified time. | [optional] [readonly] 
**uri** | **str** | Output only. The main URI in which this Service is serving traffic. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_service import GoogleCloudRunV2Service

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2Service from a JSON string
google_cloud_run_v2_service_instance = GoogleCloudRunV2Service.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2Service.to_json())

# convert the object into a dict
google_cloud_run_v2_service_dict = google_cloud_run_v2_service_instance.to_dict()
# create an instance of GoogleCloudRunV2Service from a dict
google_cloud_run_v2_service_from_dict = GoogleCloudRunV2Service.from_dict(google_cloud_run_v2_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


