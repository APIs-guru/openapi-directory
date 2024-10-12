# CloudResourceProperties

Container for connection properties for delegation of access to GCP resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_account_id** | **str** | Output only. The account ID of the service created for the purpose of this connection. The service account does not have any permissions associated with it when it is created. After creation, customers delegate permissions to the service account. When the connection is used in the context of an operation in BigQuery, the service account will be used to connect to the desired resources in GCP. The account ID is in the form of: @gcp-sa-bigquery-cloudresource.iam.gserviceaccount.com | [optional] [readonly] 

## Example

```python
from openapi_client.models.cloud_resource_properties import CloudResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CloudResourceProperties from a JSON string
cloud_resource_properties_instance = CloudResourceProperties.from_json(json)
# print the JSON string representation of the object
print(CloudResourceProperties.to_json())

# convert the object into a dict
cloud_resource_properties_dict = cloud_resource_properties_instance.to_dict()
# create an instance of CloudResourceProperties from a dict
cloud_resource_properties_from_dict = CloudResourceProperties.from_dict(cloud_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


