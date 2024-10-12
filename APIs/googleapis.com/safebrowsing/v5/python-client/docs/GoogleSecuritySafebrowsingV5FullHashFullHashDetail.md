# GoogleSecuritySafebrowsingV5FullHashFullHashDetail

Details about a matching full hash. An important note about forward compatibility: new threat types and threat attributes may be added by the server at any time; those additions are considered minor version changes. It is Google's policy not to expose minor version numbers in APIs (see https://cloud.google.com/apis/design/versioning for the versioning policy), so clients MUST be prepared to receive `FullHashDetail` messages containing `ThreatType` enum values or `ThreatAttribute` enum values that are considered invalid by the client. Therefore, it is the client's responsibility to check for the validity of all `ThreatType` and `ThreatAttribute` enum values; if any value is considered invalid, the client MUST disregard the entire `FullHashDetail` message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **List[str]** | Unordered list. Additional attributes about those full hashes. This may be empty. | [optional] 
**threat_type** | **str** | The type of threat. This field will never be empty. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v5_full_hash_full_hash_detail import GoogleSecuritySafebrowsingV5FullHashFullHashDetail

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV5FullHashFullHashDetail from a JSON string
google_security_safebrowsing_v5_full_hash_full_hash_detail_instance = GoogleSecuritySafebrowsingV5FullHashFullHashDetail.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV5FullHashFullHashDetail.to_json())

# convert the object into a dict
google_security_safebrowsing_v5_full_hash_full_hash_detail_dict = google_security_safebrowsing_v5_full_hash_full_hash_detail_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV5FullHashFullHashDetail from a dict
google_security_safebrowsing_v5_full_hash_full_hash_detail_from_dict = GoogleSecuritySafebrowsingV5FullHashFullHashDetail.from_dict(google_security_safebrowsing_v5_full_hash_full_hash_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


