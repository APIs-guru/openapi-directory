# GoogleCloudDataplexV1DataAccessSpec

DataAccessSpec holds the access control configuration to be enforced on data stored within resources (eg: rows, columns in BigQuery Tables). When associated with data, the data is only accessible to principals explicitly granted access through the DataAccessSpec. Principals with access to the containing resource are not implicitly granted access.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**readers** | **List[str]** | Optional. The format of strings follows the pattern followed by IAM in the bindings. user:{email}, serviceAccount:{email} group:{email}. The set of principals to be granted reader role on data stored within resources. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_access_spec import GoogleCloudDataplexV1DataAccessSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataAccessSpec from a JSON string
google_cloud_dataplex_v1_data_access_spec_instance = GoogleCloudDataplexV1DataAccessSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataAccessSpec.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_access_spec_dict = google_cloud_dataplex_v1_data_access_spec_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataAccessSpec from a dict
google_cloud_dataplex_v1_data_access_spec_from_dict = GoogleCloudDataplexV1DataAccessSpec.from_dict(google_cloud_dataplex_v1_data_access_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


