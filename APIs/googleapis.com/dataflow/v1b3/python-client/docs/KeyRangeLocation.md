# KeyRangeLocation

Location information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_disk** | **str** | The name of the data disk where data for this range is stored. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example \&quot;myproject-1014-104817-4c2-harness-0-disk-1\&quot;. | [optional] 
**delivery_endpoint** | **str** | The physical location of this range assignment to be used for streaming computation cross-worker message delivery. | [optional] 
**deprecated_persistent_directory** | **str** | DEPRECATED. The location of the persistent state for this range, as a persistent directory in the worker local filesystem. | [optional] 
**end** | **str** | The end (exclusive) of the key range. | [optional] 
**start** | **str** | The start (inclusive) of the key range. | [optional] 

## Example

```python
from openapi_client.models.key_range_location import KeyRangeLocation

# TODO update the JSON string below
json = "{}"
# create an instance of KeyRangeLocation from a JSON string
key_range_location_instance = KeyRangeLocation.from_json(json)
# print the JSON string representation of the object
print(KeyRangeLocation.to_json())

# convert the object into a dict
key_range_location_dict = key_range_location_instance.to_dict()
# create an instance of KeyRangeLocation from a dict
key_range_location_from_dict = KeyRangeLocation.from_dict(key_range_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


