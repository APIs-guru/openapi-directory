# BucketizedCount

Represents count of jobs within one bucket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Number of jobs whose numeric field value fall into &#x60;range&#x60;. | [optional] 
**range** | [**BucketRange**](BucketRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.bucketized_count import BucketizedCount

# TODO update the JSON string below
json = "{}"
# create an instance of BucketizedCount from a JSON string
bucketized_count_instance = BucketizedCount.from_json(json)
# print the JSON string representation of the object
print(BucketizedCount.to_json())

# convert the object into a dict
bucketized_count_dict = bucketized_count_instance.to_dict()
# create an instance of BucketizedCount from a dict
bucketized_count_from_dict = BucketizedCount.from_dict(bucketized_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


