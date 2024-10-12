# BucketResp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_name** | **str** |  | [optional] 
**cache_time_limit** | **int** |  | [optional] [default to 600]
**condition** | **str** |  | [optional] 
**data** | [**List[BucketEntry]**](BucketEntry.md) |  | 
**model_name** | **str** |  | [optional] 
**msg** | **str** |  | [optional] 
**region_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.bucket_resp import BucketResp

# TODO update the JSON string below
json = "{}"
# create an instance of BucketResp from a JSON string
bucket_resp_instance = BucketResp.from_json(json)
# print the JSON string representation of the object
print(BucketResp.to_json())

# convert the object into a dict
bucket_resp_dict = bucket_resp_instance.to_dict()
# create an instance of BucketResp from a dict
bucket_resp_from_dict = BucketResp.from_dict(bucket_resp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


