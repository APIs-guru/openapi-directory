# EnrolledService

Represents the enrollment of a cloud resource into a specific service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_product** | **str** | The product for which Access Approval will be enrolled. Allowed values are listed below (case-sensitive): * all * GA * App Engine * Artifact Registry * BigQuery * Certificate Authority Service * Cloud Bigtable * Cloud Key Management Service * Compute Engine * Cloud Composer * Cloud Dataflow * Cloud Dataproc * Cloud DLP * Cloud EKM * Cloud Firestore * Cloud HSM * Cloud Identity and Access Management * Cloud Logging * Cloud NAT * Cloud Pub/Sub * Cloud Spanner * Cloud SQL * Cloud Storage * Eventarc * Google Kubernetes Engine * Organization Policy Serivice * Persistent Disk * Resource Manager * Secret Manager * Speaker ID Note: These values are supported as input for legacy purposes, but will not be returned from the API. * all * ga-only * appengine.googleapis.com * artifactregistry.googleapis.com * bigquery.googleapis.com * bigtable.googleapis.com * container.googleapis.com * cloudkms.googleapis.com * cloudresourcemanager.googleapis.com * cloudsql.googleapis.com * compute.googleapis.com * dataflow.googleapis.com * dataproc.googleapis.com * dlp.googleapis.com * iam.googleapis.com * logging.googleapis.com * orgpolicy.googleapis.com * pubsub.googleapis.com * spanner.googleapis.com * secretmanager.googleapis.com * speakerid.googleapis.com * storage.googleapis.com Calls to UpdateAccessApprovalSettings using &#39;all&#39; or any of the XXX.googleapis.com will be translated to the associated product name (&#39;all&#39;, &#39;App Engine&#39;, etc.). Note: &#39;all&#39; will enroll the resource in all products supported at both &#39;GA&#39; and &#39;Preview&#39; levels. More information about levels of support is available at https://cloud.google.com/access-approval/docs/supported-services | [optional] 
**enrollment_level** | **str** | The enrollment level of the service. | [optional] 

## Example

```python
from openapi_client.models.enrolled_service import EnrolledService

# TODO update the JSON string below
json = "{}"
# create an instance of EnrolledService from a JSON string
enrolled_service_instance = EnrolledService.from_json(json)
# print the JSON string representation of the object
print(EnrolledService.to_json())

# convert the object into a dict
enrolled_service_dict = enrolled_service_instance.to_dict()
# create an instance of EnrolledService from a dict
enrolled_service_from_dict = EnrolledService.from_dict(enrolled_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


