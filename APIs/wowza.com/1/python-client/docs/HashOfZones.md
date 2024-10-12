# HashOfZones

A hash of zones with network usage, keyed by the name of the billing zone where the usage was generated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_billed** | **int** | The amount of usage, in bytes, that was billed for the stream target during the selected time frame. | [optional] 
**bytes_used** | **int** | The amount of content, in bytes, that went through the stream target during the selected time frame. | [optional] 

## Example

```python
from openapi_client.models.hash_of_zones import HashOfZones

# TODO update the JSON string below
json = "{}"
# create an instance of HashOfZones from a JSON string
hash_of_zones_instance = HashOfZones.from_json(json)
# print the JSON string representation of the object
print(HashOfZones.to_json())

# convert the object into a dict
hash_of_zones_dict = hash_of_zones_instance.to_dict()
# create an instance of HashOfZones from a dict
hash_of_zones_from_dict = HashOfZones.from_dict(hash_of_zones_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


