# Gzip

Configuration for gzip of service responses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**black_list** | **List[str]** | Blacklisted mime types. Wildcard supported | 
**buffer_size** | **int** | Size of the GZip buffer | 
**chunked_threshold** | **int** | Threshold for chunking data | 
**compression_level** | **int** | Compression level. From 0 to 9 | 
**enabled** | **bool** | Whether gzip compression is enabled or not | 
**excluded_patterns** | **List[str]** | Patterns that are excluded from gzipping | 
**white_list** | **List[str]** | Whitelisted mime types. Wildcard supported | 

## Example

```python
from openapi_client.models.gzip import Gzip

# TODO update the JSON string below
json = "{}"
# create an instance of Gzip from a JSON string
gzip_instance = Gzip.from_json(json)
# print the JSON string representation of the object
print(Gzip.to_json())

# convert the object into a dict
gzip_dict = gzip_instance.to_dict()
# create an instance of Gzip from a dict
gzip_from_dict = Gzip.from_dict(gzip_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


