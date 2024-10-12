# RotateChallengesRequest

The request message for the RotateChallenges RPC. Requires an access token, a root domain, and either records_to_add or records_to_remove to be populated. Records may be set for multiple subdomains at once to support SAN requests for multiple subdomains in a single domain. By default, ACME TXT record challenges that are older than 30 days will be removed. Set `keep_expired_records` to false if this behavior is undesired. There is a record maximum of 100 records per domain including expired records. Any request sent that would exceed this maximum will result in a FAILED_PRECONDITION error. NEXT ID: 6

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **bytearray** | Required. ACME DNS access token. This is a base64 token secret that is procured from the Google Domains website. It authorizes ACME TXT record updates for a domain. | [optional] 
**keep_expired_records** | **bool** | Keep records older than 30 days that were used for previous requests. | [optional] 
**records_to_add** | [**List[AcmeTxtRecord]**](AcmeTxtRecord.md) | ACME TXT record challenges to add. Supports multiple challenges on the same FQDN. | [optional] 
**records_to_remove** | [**List[AcmeTxtRecord]**](AcmeTxtRecord.md) | ACME TXT record challenges to remove. | [optional] 

## Example

```python
from openapi_client.models.rotate_challenges_request import RotateChallengesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RotateChallengesRequest from a JSON string
rotate_challenges_request_instance = RotateChallengesRequest.from_json(json)
# print the JSON string representation of the object
print(RotateChallengesRequest.to_json())

# convert the object into a dict
rotate_challenges_request_dict = rotate_challenges_request_instance.to_dict()
# create an instance of RotateChallengesRequest from a dict
rotate_challenges_request_from_dict = RotateChallengesRequest.from_dict(rotate_challenges_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


