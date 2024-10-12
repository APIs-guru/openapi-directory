# BulkAdUpdateResponse

A type that defines the fields for updated ads in the bulk response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[AdUpdateResponse]**](AdUpdateResponse.md) | A set of ad listings processed by the call. | [optional] 

## Example

```python
from openapi_client.models.bulk_ad_update_response import BulkAdUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkAdUpdateResponse from a JSON string
bulk_ad_update_response_instance = BulkAdUpdateResponse.from_json(json)
# print the JSON string representation of the object
print(BulkAdUpdateResponse.to_json())

# convert the object into a dict
bulk_ad_update_response_dict = bulk_ad_update_response_instance.to_dict()
# create an instance of BulkAdUpdateResponse from a dict
bulk_ad_update_response_from_dict = BulkAdUpdateResponse.from_dict(bulk_ad_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


