# GoogleCloudDataplexV1Partition

Represents partition metadata contained within entity instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Optional. The etag for this partition. | [optional] 
**location** | **str** | Required. Immutable. The location of the entity data within the partition, for example, gs://bucket/path/to/entity/key1&#x3D;value1/key2&#x3D;value2. Or projects//datasets//tables/ | [optional] 
**name** | **str** | Output only. Partition values used in the HTTP URL must be double encoded. For example, url_encode(url_encode(value)) can be used to encode \&quot;US:CA/CA#Sunnyvale so that the request URL ends with \&quot;/partitions/US%253ACA/CA%2523Sunnyvale\&quot;. The name field in the response retains the encoded format. | [optional] [readonly] 
**values** | **List[str]** | Required. Immutable. The set of values representing the partition, which correspond to the partition schema defined in the parent entity. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_partition import GoogleCloudDataplexV1Partition

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1Partition from a JSON string
google_cloud_dataplex_v1_partition_instance = GoogleCloudDataplexV1Partition.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1Partition.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_partition_dict = google_cloud_dataplex_v1_partition_instance.to_dict()
# create an instance of GoogleCloudDataplexV1Partition from a dict
google_cloud_dataplex_v1_partition_from_dict = GoogleCloudDataplexV1Partition.from_dict(google_cloud_dataplex_v1_partition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


