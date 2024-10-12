# DatasetTemplate

Dataset template used for dynamic dataset creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_id_prefix** | **str** | If supplied, every created dataset will have its name prefixed by the provided value. The prefix and name will be separated by an underscore. i.e. _. | [optional] 
**kms_key_name** | **str** | Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key. i.e. projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}. See https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information. | [optional] 
**location** | **str** | Required. The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. | [optional] 

## Example

```python
from openapi_client.models.dataset_template import DatasetTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of DatasetTemplate from a JSON string
dataset_template_instance = DatasetTemplate.from_json(json)
# print the JSON string representation of the object
print(DatasetTemplate.to_json())

# convert the object into a dict
dataset_template_dict = dataset_template_instance.to_dict()
# create an instance of DatasetTemplate from a dict
dataset_template_from_dict = DatasetTemplate.from_dict(dataset_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


