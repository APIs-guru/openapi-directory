# BucketEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **float** |  | 
**model_name** | **str** |  | 
**percent_of_market** | **float** |  | 

## Example

```python
from openapi_client.models.bucket_entry import BucketEntry

# TODO update the JSON string below
json = "{}"
# create an instance of BucketEntry from a JSON string
bucket_entry_instance = BucketEntry.from_json(json)
# print the JSON string representation of the object
print(BucketEntry.to_json())

# convert the object into a dict
bucket_entry_dict = bucket_entry_instance.to_dict()
# create an instance of BucketEntry from a dict
bucket_entry_from_dict = BucketEntry.from_dict(bucket_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


