# BloomFilter

A bloom filter (https://en.wikipedia.org/wiki/Bloom_filter). The bloom filter hashes the entries with MD5 and treats the resulting 128-bit hash as 2 distinct 64-bit hash values, interpreted as unsigned integers using 2's complement encoding. These two hash values, named `h1` and `h2`, are then used to compute the `hash_count` hash values using the formula, starting at `i=0`: h(i) = h1 + (i * h2) These resulting values are then taken modulo the number of bits in the bloom filter to get the bits of the bloom filter to test for the given entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bits** | [**BitSequence**](BitSequence.md) |  | [optional] 
**hash_count** | **int** | The number of hashes used by the algorithm. | [optional] 

## Example

```python
from openapi_client.models.bloom_filter import BloomFilter

# TODO update the JSON string below
json = "{}"
# create an instance of BloomFilter from a JSON string
bloom_filter_instance = BloomFilter.from_json(json)
# print the JSON string representation of the object
print(BloomFilter.to_json())

# convert the object into a dict
bloom_filter_dict = bloom_filter_instance.to_dict()
# create an instance of BloomFilter from a dict
bloom_filter_from_dict = BloomFilter.from_dict(bloom_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


