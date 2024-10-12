# PartitionJsonldPost

The Partition resource is a collection of siloed monitor and alert environments in the user account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**partition_name** | **str** | The name of the partition. Max 255 characters. | 
**partition_notes** | **str** | Notes about the partition. Max 10,000 characters. Formatting using Markdown is allowed. HTML will be removed. | [optional] 

## Example

```python
from openapi_client.models.partition_jsonld_post import PartitionJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionJsonldPost from a JSON string
partition_jsonld_post_instance = PartitionJsonldPost.from_json(json)
# print the JSON string representation of the object
print(PartitionJsonldPost.to_json())

# convert the object into a dict
partition_jsonld_post_dict = partition_jsonld_post_instance.to_dict()
# create an instance of PartitionJsonldPost from a dict
partition_jsonld_post_from_dict = PartitionJsonldPost.from_dict(partition_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


