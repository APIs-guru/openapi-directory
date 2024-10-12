# GoogleCloudWebriskV1RiceDeltaEncoding

The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoded_data** | **bytearray** | The encoded deltas that are encoded using the Golomb-Rice coder. | [optional] 
**entry_count** | **int** | The number of entries that are delta encoded in the encoded data. If only a single integer was encoded, this will be zero and the single value will be stored in &#x60;first_value&#x60;. | [optional] 
**first_value** | **str** | The offset of the first entry in the encoded data, or, if only a single integer was encoded, that single integer&#39;s value. If the field is empty or missing, assume zero. | [optional] 
**rice_parameter** | **int** | The Golomb-Rice parameter, which is a number between 2 and 28. This field is missing (that is, zero) if &#x60;num_entries&#x60; is zero. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_webrisk_v1_rice_delta_encoding import GoogleCloudWebriskV1RiceDeltaEncoding

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudWebriskV1RiceDeltaEncoding from a JSON string
google_cloud_webrisk_v1_rice_delta_encoding_instance = GoogleCloudWebriskV1RiceDeltaEncoding.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudWebriskV1RiceDeltaEncoding.to_json())

# convert the object into a dict
google_cloud_webrisk_v1_rice_delta_encoding_dict = google_cloud_webrisk_v1_rice_delta_encoding_instance.to_dict()
# create an instance of GoogleCloudWebriskV1RiceDeltaEncoding from a dict
google_cloud_webrisk_v1_rice_delta_encoding_from_dict = GoogleCloudWebriskV1RiceDeltaEncoding.from_dict(google_cloud_webrisk_v1_rice_delta_encoding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


