# GoogleCloudDataplexV1ResourceAccessSpec

ResourceAccessSpec holds the access control configuration to be enforced on the resources, for example, Cloud Storage bucket, BigQuery dataset, BigQuery table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owners** | **List[str]** | Optional. The set of principals to be granted owner role on the resource. | [optional] 
**readers** | **List[str]** | Optional. The format of strings follows the pattern followed by IAM in the bindings. user:{email}, serviceAccount:{email} group:{email}. The set of principals to be granted reader role on the resource. | [optional] 
**writers** | **List[str]** | Optional. The set of principals to be granted writer role on the resource. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_resource_access_spec import GoogleCloudDataplexV1ResourceAccessSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ResourceAccessSpec from a JSON string
google_cloud_dataplex_v1_resource_access_spec_instance = GoogleCloudDataplexV1ResourceAccessSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ResourceAccessSpec.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_resource_access_spec_dict = google_cloud_dataplex_v1_resource_access_spec_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ResourceAccessSpec from a dict
google_cloud_dataplex_v1_resource_access_spec_from_dict = GoogleCloudDataplexV1ResourceAccessSpec.from_dict(google_cloud_dataplex_v1_resource_access_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


