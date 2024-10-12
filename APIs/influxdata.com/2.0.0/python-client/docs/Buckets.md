# Buckets


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buckets** | [**List[Bucket]**](Bucket.md) |  | [optional] 
**links** | [**Links**](Links.md) |  | [optional] 

## Example

```python
from openapi_client.models.buckets import Buckets

# TODO update the JSON string below
json = "{}"
# create an instance of Buckets from a JSON string
buckets_instance = Buckets.from_json(json)
# print the JSON string representation of the object
print(Buckets.to_json())

# convert the object into a dict
buckets_dict = buckets_instance.to_dict()
# create an instance of Buckets from a dict
buckets_from_dict = Buckets.from_dict(buckets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


