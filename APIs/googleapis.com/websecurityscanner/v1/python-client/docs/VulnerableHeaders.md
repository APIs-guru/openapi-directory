# VulnerableHeaders

Information about vulnerable or missing HTTP Headers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | [**List[Header]**](Header.md) | List of vulnerable headers. | [optional] 
**missing_headers** | [**List[Header]**](Header.md) | List of missing headers. | [optional] 

## Example

```python
from openapi_client.models.vulnerable_headers import VulnerableHeaders

# TODO update the JSON string below
json = "{}"
# create an instance of VulnerableHeaders from a JSON string
vulnerable_headers_instance = VulnerableHeaders.from_json(json)
# print the JSON string representation of the object
print(VulnerableHeaders.to_json())

# convert the object into a dict
vulnerable_headers_dict = vulnerable_headers_instance.to_dict()
# create an instance of VulnerableHeaders from a dict
vulnerable_headers_from_dict = VulnerableHeaders.from_dict(vulnerable_headers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


